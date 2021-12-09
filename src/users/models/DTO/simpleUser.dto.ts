import { IsEmail, IsNotEmpty } from "class-validator";

export class SimpleUserDto {

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
    
}