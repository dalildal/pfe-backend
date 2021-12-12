import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    async addProduct(
        @Body('idUser') prodIdUser: string,
        @Body('state') prodState: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
        @Body('idCategory') prodIdCategory: string,
    ) {
        const generatedId = await this.productsService.insertProduct(
            prodIdUser,
            prodState,
            prodTitle,
            prodDesc,
            prodPrice,
            prodIdCategory,
        );
        return { id: generatedId };
    }

    @Get()
    async getAllProducts() {
        const products = await this.productsService.getProducts();
        console.log(products);
        
        return products;
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productsService.getSingleProduct(prodId);
    }

    @Patch(':id')
    async updateProduct(
        @Param('id') prodId: string,
        @Body('idUser') prodIdUser: string,
        @Body('state') prodState: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
        @Body('idCategory') prodIdCategory: string,
    ) {
        await this.productsService.updateProduct(prodId, prodIdUser, prodState, prodTitle, prodDesc, prodPrice, prodIdCategory);
        return null;
    }

    @Delete(':id')
    async removeProduct(@Param('id') prodId: string) {
        await this.productsService.deleteProduct(prodId);
        return null;
    }
}