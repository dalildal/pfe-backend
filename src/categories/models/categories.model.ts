import * as mongoose from 'mongoose';

export const CategoriesSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

export interface Category extends mongoose.Document {
    id: string;
    name: string;
}