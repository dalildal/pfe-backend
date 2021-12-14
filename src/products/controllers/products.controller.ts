import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
    Query,
} from '@nestjs/common';
import { GetProductsFilterDto } from '../dto/get-products-filter.dto';
import { ProductsService } from '../services/products.service';
import { Res, UseGuards } from '@nestjs/common';

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
        @Body('address') prodAddress: string,
    ) {
        const generatedId = await this.productsService.insertProduct(
            prodIdUser,
            prodState,
            prodTitle,
            prodDesc,
            prodPrice,
            prodIdCategory,
<<<<<<< HEAD
            prodAddress,
=======
            new Array(),
>>>>>>> 12682d6f89c01f1837921abaa1548910629d0e8a
        );
        return { id: generatedId };
    }

    @Get()
    async getAllProducts(@Query() filterDto: GetProductsFilterDto) {
        if (Object.keys(filterDto).length) {
            const productsFiltered = await this.productsService.getProductsWithFilters(filterDto);
            return productsFiltered;
        } else {
            const products = await this.productsService.getProducts();
            return products;
        }
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
        @Body('address') prodAddress: string,
    ) {
        await this.productsService.updateProduct(prodId, prodIdUser, prodState, prodTitle, prodDesc, prodPrice, prodIdCategory, prodAddress);
        return null;
    }

    @Delete(':id')
    async removeProduct(@Param('id') prodId: string) {
        await this.productsService.deleteProduct(prodId);
        return null;
    }

    @Get('product-images/:fileId')
    async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
        res.sendFile(fileId, { root: "uploads/product-images" });
    }

    @Delete('product-images/:fileId/:productid')
    async deleteImage(@Param('fileId') fileId, @Param('productid') productId: any): Promise<any> {
        console.log(fileId);
        console.log(productId);
        this.productsService.deleteImage(fileId, productId);
    }


}