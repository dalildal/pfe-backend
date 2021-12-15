import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import * as bcrypt from 'bcrypt';
import { User } from "../models/user.interface"
import { LoginUserDto } from "../models/DTO/loginUser.dto";
import { AuthService } from "src/auth/services/authService";
import { from } from "rxjs";

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
        if (!isMatch) {
            throw new HttpException('Wrong password or email', HttpStatus.UNAUTHORIZED);
        }
        return from(this.authService.generateJwt(user));
    }

    getUser(id: string) {
        return this.userModel.findById(id)
    }

    async updateOneProfilPic(path: string, id: string) {
        const updatedUser = await this.userModel.findById(id);
        updatedUser.url_profil_pic = path;
        updatedUser.save();
    }

    async updateCampus(campus: number, id: string) {
        const updatedUser = await this.userModel.findById(id);
        updatedUser.campus = campus;
        updatedUser.save();
    }

    async getUsers() {
        const users = await this.userModel.find().exec();
        return users;
    }

    /*TODO connexion DB*/
    async create(userRegister: User): Promise<string> {
        const newUser = new this.userModel(userRegister);

        if (await this.findUserByEmail(newUser.email)) {
            throw new HttpException("Mail already taken", HttpStatus.UNAUTHORIZED)
        }
        if (newUser.password.length == 0) {
            throw new HttpException("Password is empty", HttpStatus.UNAUTHORIZED)
        }
        const salt = await bcrypt.genSalt();
        newUser.password = await bcrypt.hash(newUser.password, salt);
        let user = await newUser.save();
        return user.id as string;
    }


    public async findUserByEmail(email: string): Promise<User> {
        return await this.userModel.findOne({ email });
    }


}
