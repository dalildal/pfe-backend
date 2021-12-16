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

    async insertProduct(idUser: string, state: string, title: string, desc: string, price: number, idCategory: string, address: string,liste: string[]) {
        const newProduct = new this.productModel({
            idUser,
            state,
            title,
            description: desc,
            price,
            idCategory,
            address,
            liste,
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
            liste: prod.liste,
            address: prod.address,
        }));
    }

    async getProductsWithFilters(filterDto: GetProductsFilterDto) {
        let { status, search, sort } = filterDto;
        let products = await this.findAllProducts();
        if (sort) {
            if (sort === "ASC") {
                products = (await products).sort((prod1, prod2) => {
                    return prod1.price - prod2.price;
                });
            } else if (sort === "DESC") {
                products = (await products).sort((prod1, prod2) => {
                    return prod2.price - prod1.price;
                });
            }
        }
        if (search) {
            search = search.toLocaleLowerCase();
            products = (await products).filter(prod =>
                prod.title.toLocaleLowerCase().includes(search) ||
                prod.description.toLocaleLowerCase().includes(search)
            );
        }
        return products;
    }

    async deleteImage(fileId: any, productId: string) {
        console.log("Product Id :: " + productId);
        console.log(fileId);
        const product = await this.findProduct(productId)
        for (var i = 0; i < product.liste.length; i++) {

            if (product.liste[i] === fileId) {
                console.log(product.liste.splice(i, 1));
                i--;
            }

        }
        console.log("Nouvelle liste :: " + product.liste);
        product.save();
    }
    
    async getProductsByPriceASC() {
        let products = await this.findAllProducts();
        products = (await products).sort((prod1, prod2) => {
            return prod1.price - prod2.price;
        }
        );
        return products;
    }

    async getProductsOnHold() {
        let products = await this.findAllProducts();
        products = (await products).filter(prod =>
            prod.state.toLowerCase() === "en attente"
        );
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
            liste: product.liste,
            address: product.address
        };
    }

    async addProductPic(filePath: any, productId: any) {
        const updatedProduct = await this.findProduct(productId);
        console.log(updatedProduct);
        updatedProduct.liste.push(filePath);
        updatedProduct.save();
    }

    async updateProduct(productId: string, idUser: string, state: string, title: string, desc: string, price: number, idCategory: string, address: string) {
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
        if (address) {
            updatedProduct.address = address;
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
        return await this.productModel.find().exec();
    }

    async getProductsByIdUser(idUser: string) {
        const products = await this.findAllProducts();
        const prod = Array();
        products.forEach(element => {

            if (element.idUser === idUser) {
                prod.push(element);
            }

        });

        return prod;
    }
}