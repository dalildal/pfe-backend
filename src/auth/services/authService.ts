import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs/internal/Observable";
import { from } from "rxjs/internal/observable/from";
import { User } from "src/users/models/user.interface";
const bcrypt = require ('bcrypt');

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) {}

    generateJwt(user: User): Observable<string> {
        return from(this.jwtService.signAsync({user}));
    }

    hashPassword(password: string): Observable<string> {
        return from<string>(bcrypt.hash(password, 12));
    }

    comparePasswords(password: string, storedPasswordHash: string): Observable<any> {
        return from(bcrypt.compare(password, storedPasswordHash));
    }
}