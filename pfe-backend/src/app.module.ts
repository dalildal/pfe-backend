import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/controllers/userController';
import { UserService } from './users/services/userService';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://groupe10:groupe1010@vincimarket.rzddw.mongodb.net/VinciMarket?retryWrites=true&w=majority'),
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '../..', 'pfe-frontend/dist'),
  }),],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})

@Module({
  controllers: [UserController],
})
export class AppModule { }
