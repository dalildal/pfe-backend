import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { SubCategoriesService } from '../services/sub-categories.service';

@Controller('subcategories')
export class SubCategoriesController {
    constructor(private readonly subCategoriesService: SubCategoriesService) { }

    @Post()
    async addSubCategory(
        @Body('idCategory') idCategory: string,
        @Body('name') subCatName: string,
    ) {
        const generatedId = await this.subCategoriesService.insertSubCategory(
            idCategory,
            subCatName,
        );
        return { id: generatedId };
    }

    @Get()
    async getAllSubCategories() {
        const subCategories = await this.subCategoriesService.getSubCategories();
        return subCategories;
    }

    @Get(':id')
    getCategory(@Param('id') subCatId: string) {
        return this.subCategoriesService.getSingleSubCategory(subCatId);
    }

    @Patch(':id')
    async updateSubCategory(
        @Param('id') subCatId: string,
        @Body('name') catName: string,

    ) {
        await this.subCategoriesService.updateSubCategory(subCatId, catName);
        return null;
    }

    @Delete(':id')
    async removeSubCategory(@Param('id') subCatId: string) {
        await this.subCategoriesService.deleteSubCategory(subCatId);
        return null;
    }
}