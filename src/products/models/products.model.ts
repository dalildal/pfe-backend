import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
    idUser: { type: String, required: true },
    state: { type: String, required: true }, // Vendre / Donner / Vendu
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    idCategory: { type: String, required: true },
<<<<<<< HEAD
    address: { type: String, required: true },
=======
    liste: Array,
>>>>>>> 12682d6f89c01f1837921abaa1548910629d0e8a
    //creationDate: { type: Date, required: true }
    // voir PAE pour les images - listes d'images ? vidéos ?
});

export interface Product extends mongoose.Document {
    id: string;
    idUser: string;
    state: string;
    title: string;
    description: string;
    price: number;
    idCategory: string;
<<<<<<< HEAD
    address: string;
=======
    liste: string[]
>>>>>>> 12682d6f89c01f1837921abaa1548910629d0e8a
    //creationDate: Date;
}