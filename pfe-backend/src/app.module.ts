import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ProductsController } from './products/controllers/products.controller';



@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://groupe10:groupe1010@vincimarket.rzddw.mongodb.net/VinciMarket?retryWrites=true&w=majority')
    , UserModule
    , ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'pfe-frontend/dist'),
    })],
  controllers: [AppController, ProductsController],
  providers: [AppService],

})

export class AppModule { }
