import { Injectable } from "@nestjs/common";
import { User } from "src/users/models/user.interface";
import { UserService } from "src/users/services/userService";

@Injectable()
export class UploadService {
    
    
    constructor(
        private userService: UserService
    ){

    }
    
    
    upload(path: string,id:string) {
        return this.userService.updateOneProfilPic(path, id);
    }



}

