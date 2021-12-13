import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ProductsModule } from './products/products.module';
import { UploadModule } from './upload/upload.module';
import { join } from 'path';
import { CategoriesModule } from './categories/categories.module';
import { SubCategoriesModule } from './sub-categories/sub-categories.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://groupe10:groupe1010@vincimarket.rzddw.mongodb.net/VinciMarket?retryWrites=true&w=majority')
    , UserModule, ProductsModule, UploadModule, CategoriesModule, SubCategoriesModule],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule { }
