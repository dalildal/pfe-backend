import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import * as bcrypt from 'bcrypt';
import { User } from "../models/user.interface"
import { LoginUserDto } from "../models/DTO/LoginUser.dto";
import { AuthService } from "src/auth/services/authService";
import { from } from "rxjs/internal/observable/from";


@Injectable()
export class UserService {
    jwtService: any;

    constructor(
        @InjectModel('User')
        private readonly userModel: Model<User>,
        private authService: AuthService

    ) {

    }

    async verify(loginUser: LoginUserDto) {
        let user: User = await this.findUserByEmail(loginUser.email);
        if (!user) {
            throw new HttpException('Login was not Successfull', HttpStatus.UNAUTHORIZED);
        }
        const isMatch = await bcrypt.compare(loginUser.password, user.password);
        console.log(isMatch)
        if (!isMatch) {
            throw new HttpException('Wrong password or email', HttpStatus.UNAUTHORIZED);
        }
        return from(this.authService.generateJwt(user));
    }

    getUser(id: string) {
        this.userModel.findById
    }


    async getUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }

    /*TODO connexion DB*/
    async create(userRegister: User): Promise<string> {
        const newUser = new this.userModel(userRegister);

        if (this.findUserByEmail(newUser.email)) {
            throw new HttpException("Mail already taken", HttpStatus.UNAUTHORIZED)
        }
        if (newUser.password.length == 0) {
            throw new HttpException("Password is empty", HttpStatus.UNAUTHORIZED)
        }
        const round = Math.floor(Math.random() * 25487595);
        newUser.password = await bcrypt.hash(newUser.password, round);
        let user = await newUser.save();
        return user.id as string;
    }


    private async findUserByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email });
    }


}
