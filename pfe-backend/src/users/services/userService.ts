import { Body, Injectable } from "@nestjs/common"
import { create } from "domain"
import { UserDTO } from "../models/userDto"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"


@Injectable()
export class UserService{
<<<<<<< HEAD
    getUser(id: string) {
        return `return from the services user number ${id}`
    }
    
    /*TODO connexion DB*/
    async create(userDTO: UserDTO){
=======

    constructor(@InjectModel('User') private readonly userModel: Model<UserDTO>) {
        
>>>>>>> 3dd9316b01cc392527a8f2e69c7a3fd968ed0cca
    }


    
    getUser(id: string) {
        this.userModel.findById
    }


     async getUsers() {
       const users = await this.userModel.find().exec();
       return users;
    }
    
    /*TODO connexion DB*/
    async create(userDTO: UserDTO){
        const newUser = new this.userModel(userDTO);
         let user = await newUser.save();
       return user.id as string;
    }


}
