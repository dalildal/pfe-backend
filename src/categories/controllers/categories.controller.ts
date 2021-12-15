import { Controller, Post, Body, Get, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CategoriesService } from '../services/categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly categoriesService: CategoriesService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async addCategory(
        @Body('name') catName: string,
    ) {
        const generatedId = await this.categoriesService.insertCategory(
            catName,

        );
        return { id: generatedId };
    }

    @Get()
    async getAllCategories() {
        const categories = await this.categoriesService.getCategories();
        return categories;
    }

    @Get(':id')
    getCategory(@Param('id') catId: string) {
        return this.categoriesService.getSingleCategory(catId);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async updateCategory(
        @Param('id') catId: string,
        @Body('name') catName: string,

    ) {
        await this.categoriesService.updateCategory(catId, catName);
        return null;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async removeCategory(@Param('id') catId: string) {
        await this.categoriesService.deleteCategory(catId);
        return null;
    }
}