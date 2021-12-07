import * as mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    name: {type:String, required : true},
    lastname: {type: String, required : true},
    campus:{type: Number, required : true},
    email: {type: String, required : true},
    password: {type: String, required : true},
    is_admin: Boolean,

})
export interface UserDTO {
    id:string;
    name: string;
    lastname: string;
    campus:number;
    email: string;
    password: string;
    is_admin: boolean;

}