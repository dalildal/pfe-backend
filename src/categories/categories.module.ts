import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesController } from './controllers/categories.controller';
import { CategoriesSchema } from './models/categories.model';
import { CategoriesService } from './services/categories.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Category', schema: CategoriesSchema }]),
    ],
    controllers: [CategoriesController],
    providers: [CategoriesService],
})
export class CategoriesModule { }