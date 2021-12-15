import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesSchema } from './models/categories.model';
import { CategoriesService } from './services/categories.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Category', schema: CategoriesSchema }]), AuthModule
    ],
    controllers: [CategoriesController],
    providers: [CategoriesService],
})
export class CategoriesModule { }