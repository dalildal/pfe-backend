import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './controllers/products.controller';
import { ProductSchema } from './models/products.model';
import { ProductsService } from './services/products.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    ],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule { }