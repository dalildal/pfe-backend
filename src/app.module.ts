import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { join } from 'path';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://groupe10:groupe1010@vincimarket.rzddw.mongodb.net/VinciMarket?retryWrites=true&w=majority')
    , UserModule, ProductsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule { }
