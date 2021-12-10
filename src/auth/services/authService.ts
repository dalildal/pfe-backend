import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/models/user.interface";
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) { }

    generateJwt(user: User): Promise<string> {
        return this.jwtService.signAsync({ user });
    }

    hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 12);
    }


}