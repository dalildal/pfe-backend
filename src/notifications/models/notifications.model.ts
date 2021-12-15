import * as mongoose from 'mongoose';

export const NotificationSchema = new mongoose.Schema({
    idUser: { type: String, required: true },
    idProduct: { type: String, required: true },
    state: { type: String, required: true }, 
    title: { type: String, required: true },
    description: { type: String, required: true },
    
});

export interface Notification extends mongoose.Document {
    id: string;
    idUser: string;
    idProduct: string;
    state: string;
    title: string;
    description: string;
    
    
}