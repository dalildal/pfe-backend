import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { LoginUserDto } from '../models/DTO/LoginUser.dto';
import { User } from '../models/user.interface';


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
updateUser(@Param('id') id: String, @Body() userdto: User){
    return 'update a user';
}

@Delete(':id')
remove(@Param('id') id:String){
    return 'remove a user';
}

@Post('register')
async createUser(@Body() userdto : User){
    
    return await this.userService.create(userdto);

}

@Post('login')
async verify(@Body() userLoginDTO : LoginUserDto){
    
    return await this.userService.verify(userLoginDTO);

}

}