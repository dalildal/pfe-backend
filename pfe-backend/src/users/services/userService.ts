import { Body, Injectable } from "@nestjs/common"
import { create } from "domain"
import { UserDTO } from "../dto/userDto"


@Injectable()
export class UserService{
    getUser(id: string) {
        return `return from the services user number ${id}`
    }
    
    /*TODO connexion DB*/
    async create(userDTO: UserDTO){

    }


}
