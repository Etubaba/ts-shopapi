import mongoose from "mongoose";
import CartI from "../interface"
const {Schema}=mongoose


const cartSchema=new Schema<CartI>({
    userId:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true},
    productName:{
        type:String,
        required:true},
    price:{type:Number, required:true},
    image:{type:String, required:true},
})

const cart =mongoose.model('Cart',cartSchema);

export default cart