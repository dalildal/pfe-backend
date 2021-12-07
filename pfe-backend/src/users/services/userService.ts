import { Body, Injectable } from "@nestjs/common"
import { create } from "domain"
import { UserDTO } from "../models/userDto"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService{
    
    
    
    async verifyUser(userDTO: UserDTO) : Promise<boolean> {
        const users = await this.getUsers();
        
        users.forEach(element => {
            if(element.email === userDTO.email && bcrypt.compare(userDTO.password,element.password)){
                return true;
            }
        });
        return false;
    }

    constructor(@InjectModel('User') private readonly userModel: Model<UserDTO>) {
        
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
