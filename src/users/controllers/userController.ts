import { UseGuards } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LoginUserDto } from 'src/users/models/DTO/loginUser.dto';
import { User } from '../models/user.interface';
import { UserService } from '../services/userService';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @Get()
    async getUsers() {
        return await this.userService.getUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUser(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: String, @Body() userdto: User) {
        return 'update a user';
    }

    @Delete(':id')
    remove(@Param('id') id: String) {
        return 'remove a user';
    }

    
    @Post('login')
    async verifyUser(@Body() userDTO: LoginUserDto) {
        return (await this.userService.verify(userDTO)).pipe(
            map(async (jwt:string) =>{
                return{
                    userId : await (await this.userService.findUserByEmail(userDTO.email)).id,
                    access_token: jwt,
                    token_type:'JWT',
                    exprires_in:10000
                }
            })
        )
    }

    @Post('register')
    async createUser(@Body() userdto: User) {

        return await this.userService.create(userdto);

    }

}