import { Module } from '@nestjs/common';  
import { UserController } from './controllers/userController';
import { UserService } from './services/userService';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/userDto';
@Module({   
    imports: [MongooseModule.forFeature([{name: 'User' , schema : UserSchema}])],
    controllers: [UserController],   
    providers: [UserService], 
}) 


export class UserModule {
 

}