import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubCategoriesController } from './controllers/sub-categories.controller';
import { SubCategoriesSchema } from './models/sub-categories.model';
import { SubCategoriesService } from './services/sub-categories.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'SubCategory', schema: SubCategoriesSchema }]),
    ],
    controllers: [SubCategoriesController],
    providers: [SubCategoriesService],
})
export class SubCategoriesModule { }