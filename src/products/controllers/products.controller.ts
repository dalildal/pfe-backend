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
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { GetProductsFilterDto } from '../dto/get-products-filter.dto';
import { ProductsService } from '../services/products.service';
import { Res, UseGuards } from '@nestjs/common';
import { NotificationService } from 'src/notifications/services/notifications.service';


@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService,
        private notificationService: NotificationService

    ) { }

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
            prodAddress,
            new Array(),
        );
        this.notificationService.createNotification(prodIdUser, generatedId, false, "Ajout produit", "Votre produit a été ajouté et est en attente de validation par un modérateur");
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
    @Get('/onhold')
    getProductsOnHold() {
        return this.productsService.getProductsOnHold();
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
        if (prodState === 'A vendre') {
            this.notificationService.createNotification(prodIdUser, prodId, false, "Produit modifié", "Votre annonce a été validé");
        }
        else if (prodState === 'Supprimer') {
            this.notificationService.createNotification(prodIdUser, prodId, false, "Produit modifié", "Votre annonce a été supprimé");
        }
        else if (prodState === 'A donner') {
            this.notificationService.createNotification(prodIdUser, prodId, false, "Produit modifié", "Votre produit a été vendu");
        }
        else if (prodState === 'Vendu') {
            this.notificationService.createNotification(prodIdUser, prodId, false, "Produit modifié", "Votre produit a été vendu");
        }
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

    @Get('productsUser/:idUser')
    getProductsByIdUser(@Param('idUser') idUser: string) {
        return this.productsService.getProductsByIdUser(idUser);
    }

}