import { Injectable } from "@nestjs/common";
import { User } from "src/users/models/user.interface";
import { UserService } from "src/users/services/userService";

@Injectable()
export class UploadService {
    
    
    constructor(
        private userService: UserService
    ){

    }
    
    
    upload(id: User, arg1: { profileImage: any; }) {
        return this.userService.updateOne(id, arg1);
    }



}

