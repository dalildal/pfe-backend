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
import { ConfigModule } from '@nestjs/config';
import { NotificationModule } from './notifications/notifications.module';


@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MongooseModule.forRoot(process.env.DATABASE_URL)
    , UserModule, ProductsModule, UploadModule, CategoriesModule, SubCategoriesModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],

})

export class AppModule { }
