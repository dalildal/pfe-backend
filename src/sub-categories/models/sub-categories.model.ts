import * as mongoose from 'mongoose';

export const SubCategoriesSchema = new mongoose.Schema({
    idCategory: { type: String, required: true },
    name: { type: String, required: true },
});

export interface SubCategory extends mongoose.Document {
    id: string;
    idCategory: string;
    name: string;
}