import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from '../models/categories.model';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectModel('Category') private readonly categoryModel: Model<Category>,
    ) { }

    async insertCategory(name: string,) {
        const newCategory = new this.categoryModel({
            name,
        });
        const result = await newCategory.save();
        return result.id as string;
    }

    async getCategories() {
        const categories = await this.categoryModel.find().exec();
        return categories.map(cat => ({
            id: cat.id,
            name: cat.name,
        }));
    }

    async getSingleCategory(catId: string) {
        const cat = await this.findCategory(catId);
        return {
            id: cat.id,
            name: cat.name,
        };
    }

    async updateCategory(catId: string, name: string) {
        const updatedCategory = await this.findCategory(catId);
        if (name) {
            updatedCategory.name = name;
        }
    }

    async deleteCategory(catId: string) {
        const result = await this.categoryModel.deleteOne({ _id: catId }).exec();
        console.log(result);
        if (!result) {
            throw new NotFoundException('Could not find category.');
        }
    }

    private async findCategory(id: string): Promise<Category> {
        let category;
        try {
            category = await this.categoryModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find category.');
        }
        if (!category) {
            throw new NotFoundException('Could not find category.');
        }
        return category;
    }
}