import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDTO } from '../models/userDto';

import { UserService } from '../services/userService';

@Controller('user')
export class UserController {
  
    constructor(private userService:UserService){}
  
@Get()
async getUsers() {
    return await this.userService.getUsers();
  }

@Get('/:id')
getUserById(@Param('id') id: string){
    return this.userService.getUser(id);
}

@Put(':id')
updateUser(@Param('id') id: String, @Body() userdto: UserDTO){
    return 'update a user';
}

@Delete(':id')
remove(@Param('id') id:String){
    return 'remove a user';
}
@Post('login')
async verifyUser(@Body() userDTO: UserDTO){
    if(this.userService.verifyUser(userDTO)){
        //TODO
    }
}

@Post()
async createUser(@Body() userdto : UserDTO){
    return await this.userService.create(userdto);

}

}