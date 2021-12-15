import { Patch, Res, UseGuards } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LoginUserDto } from 'src/users/models/DTO/loginUser.dto';
import { User } from '../models/user.interface';
import { UserService } from '../services/userService';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getUsers() {
        return await this.userService.getUsers();
    }

    @UseGuards(JwtAuthGuard)
    @Get('/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUser(id);
    }

    @Get('profil-images/:fileId')
    async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
        try {
            res.sendFile(fileId, { root: "uploads/profil-images" });

        } catch (err) {
            console.log(err);
        }
    }



    @Patch(':id')
    async updateUserCampus(
        @Param('id') userId: string,
        @Body('campus') campus: number,
    ) {
        await this.userService.updateCampus(campus, userId);
        return null;
    }

    @Post('login')
    async verifyUser(@Body() userDTO: LoginUserDto) {
        return (await this.userService.verify(userDTO)).pipe(
            map((jwt: string) => {
                return {
                    access_token: jwt,
                    token_type: 'JWT',
                    exprires_in: 10000
                }
            })
        )
    }

    @Post('register')
    async createUser(@Body() userdto: User) {
        return await this.userService.create(userdto);
    }

}