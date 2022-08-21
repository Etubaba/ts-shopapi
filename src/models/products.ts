import mongoose from "mongoose";
import Iproduct from "../interface";

const {Schema} = mongoose



const productSchema =new Schema<Iproduct>({
    image:{type:String, required:true},
    title:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true},
    rating:{type:Number, default:1, required:true }
})

const Product=mongoose.model('Product',productSchema)
export default Product