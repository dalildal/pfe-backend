import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubCategory } from '../models/sub-categories.model';

@Injectable()
export class SubCategoriesService {
    constructor(
        @InjectModel('SubCategory') private readonly subCategoryModel: Model<SubCategory>,
    ) { }

    async insertSubCategory(idCategory: string, name: string) {
        const newSubCategory = new this.subCategoryModel({
            idCategory,
            name,
        });
        const result = await newSubCategory.save();
        return result.id as string;
    }

    async getSubCategories() {
        const subCategories = await this.subCategoryModel.find().exec();
        return subCategories.map(cat => ({
            id: cat.id,
            idCategory: cat.idCategory,
            name: cat.name,
        }));
    }

    async getSingleSubCategory(subCatId: string) {
        const cat = await this.findSubCategory(subCatId);
        return {
            id: cat.id,
            idCategory: cat.idCategory,
            name: cat.name,
        };
    }

    async updateSubCategory(subCatId: string, name: string) {
        const updatedCategory = await this.findSubCategory(subCatId);
        if (name) {
            updatedCategory.name = name;
        }
    }

    async deleteSubCategory(catId: string) {
        const result = await this.subCategoryModel.deleteOne({ _id: catId }).exec();
        console.log(result);
        if (!result) {
            throw new NotFoundException('Could not find sub-category.');
        }
    }

    private async findSubCategory(id: string): Promise<SubCategory> {
        let subCategory;
        try {
            subCategory = await this.subCategoryModel.findById(id).exec();
        } catch (error) {
            throw new NotFoundException('Could not find subCategory.');
        }
        if (!subCategory) {
            throw new NotFoundException('Could not find subCategory.');
        }
        return subCategory;
    }
}