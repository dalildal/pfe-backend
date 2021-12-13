import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GetProductsFilterDto } from '../dto/get-products-filter.dto';
import { Product } from '../models/products.model';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
    ) { }

    async insertProduct(idUser: string, state: string, title: string, desc: string, price: number, idCategory: string) {
        const newProduct = new this.productModel({
            idUser,
            state,
            title,
            description: desc,
            price,
            idCategory,
        });
        const result = await newProduct.save();
        return result.id as string;
    }

    async getProducts() {
        const products = await this.findAllProducts();
        return products.map(prod => ({
            id: prod.id,
            idUser: prod.idUser,
            state: prod.state,
            title: prod.title,
            description: prod.description,
            price: prod.price,
            idCategory: prod.idCategory,
        }));
    }

    async getProductsWithFilters(filterDto: GetProductsFilterDto) {
        let { status, search } = filterDto;
        let products = await this.findAllProducts();
        search = search.toLocaleLowerCase();
        if (search) {
            products = (await products).filter(prod =>
                prod.title.toLocaleLowerCase().includes(search) ||
                prod.description.toLocaleLowerCase().includes(search)
            );
        }
        return products;
    }

    async getSingleProduct(productId: string) {
        const product = await this.findProduct(productId);
        return {
            id: product.id,
            idUser: product.idUser,
            state: product.state,
            title: product.title,
            description: product.description,
            price: product.price,
            idCategory: product.idCategory,
        };
    }

    async updateProduct(productId: string, idUser: string, state: string, title: string, desc: string, price: number, idCategory: string) {
        const updatedProduct = await this.findProduct(productId);

        if (updatedProduct.idUser != idUser) {
            throw new HttpException('Wrong user', HttpStatus.UNAUTHORIZED); // en attendant de pouvoir vérifié avec le token
        }

        if (state) {
            updatedProduct.state = state;
        }
        if (title) {
            updatedProduct.title = title;
        }
        if (desc) {
            updatedProduct.description = desc;
        }
        if (price) {
            updatedProduct.price = price;
        }
        if (idCategory) {
            updatedProduct.idCategory = idCategory;
        }
        updatedProduct.save();
    }

    async deleteProduct(prodId: string) {
        const result = await this.productModel.deleteOne({ _id: prodId }).exec();
        console.log(result);
        if (!result) {
            throw new NotFoundException('Could not find product.');
        }

    }

    private async findProduct(id: string): Promise<Product> {
        let product;
        try {
            product = await this.productModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find product.');
        }
        if (!product) {
            throw new NotFoundException('Could not find product.');
        }
        return product;
    }
    private async findAllProducts() {
        return this.productModel.find().exec();
    }
}