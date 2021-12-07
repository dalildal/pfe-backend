import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/controllers/userController';
import { UserService } from './users/services/userService';

@Module({
  imports: [],
  controllers: [AppController,UserController],
  providers: [AppService,UserService],
})

@Module({
  controllers: [UserController],
})
export class AppModule {}
