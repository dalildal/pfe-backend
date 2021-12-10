import { Module } from '@nestjs/common';
import { UserController } from './controllers/userController';
import { UserService } from './services/userService';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.interface';
import { AuthService } from 'src/auth/services/authService';
import { jwtConstants } from 'src/auth/constants/constants';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),AuthModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})


export class UserModule {


}