import * as mongoose from 'mongoose';
import { Column, Entity } from 'typeorm';


export const UserSchema = new mongoose.Schema({
    name: {type:String, required : true},
    lastname: {type: String, required : true},
    campus:{type: Number, required : true},
    email: {type: String, required : true},
    password: {type: String, required : true},
    is_admin: Boolean,
    is_active: Boolean,
    url_profil_pic: String,

})

export interface User {
    id:string;

   
    name: string;
    lastname: string;
    campus:number;
    email: string;
    password: string;
    is_admin: boolean;
    is_active: boolean;
    url_profil_pic:string;

}