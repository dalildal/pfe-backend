import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/controllers/userController';
import { UserService } from './users/services/userService';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://groupe10:<groupe1010>@vincimarket.rzddw.mongodb.net/VinciMarket?retryWrites=true&w=majority')],
  controllers: [AppController,UserController],
  providers: [AppService, UserService],
})

@Module({
  controllers: [UserController],
})
export class AppModule {}
