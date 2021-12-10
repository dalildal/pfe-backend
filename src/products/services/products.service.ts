import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from '../models/products.model';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,
    ) { }

    async insertProduct(idUser: string, state: string, title: string, desc: string, price: number, address: string) {
        const newProduct = new this.productModel({
            idUser,
            state,
            title,
            description: desc,
            price,
            address,
        });
        const result = await newProduct.save();
        return result.id as string;
    }

    async getProducts() {
        const products = await this.productModel.find().exec();
        return products.map(prod => ({
            id: prod.id,
            idUser: prod.idUser,
            state: prod.state,
            title: prod.title,
            description: prod.description,
            price: prod.price,
            address: prod.address,
        }));
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
            address: product.address,
        };
    }

    async updateProduct(productId: string, idUser: string, state: string, title: string, desc: string, price: number, address: string) {
        const updatedProduct = await this.findProduct(productId);
        if (updatedProduct.idUser === idUser) {
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
            if (address) {
                updatedProduct.address = address;
            }
            updatedProduct.save();
        }
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
}