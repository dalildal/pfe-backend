import { Module } from '@nestjs/common';
import { UserController } from './controllers/userController';
import { UserService } from './services/userService';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './models/user.interface';
import { AuthService } from 'src/auth/services/authService';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants/constants';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]), JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),],
  controllers: [UserController],
  providers: [UserService, AuthService],
})


export class UserModule {


}