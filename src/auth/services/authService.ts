import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { from } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

import { User } from "src/users/models/user.interface";
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly jwtService: JwtService) { }

    generateJwt(user: User): Observable<string> {
        return from(this.jwtService.signAsync({ user }));
    }

    async hashPassword(password: string): Promise<Observable<string>> {
        return from<string>(await bcrypt.hash(password, 12));
    }

    comparePasswords(password: string, storedPasswordHash: string): Observable<any> {
        return from(bcrypt.compare(password, storedPasswordHash));
    }
}