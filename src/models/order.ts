import mongoose from "mongoose";
import OrderI from '../interface'
const {Schema}=mongoose


const orderSchema=new Schema<OrderI>({
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
    transactionId:{type:String, required:true},
})

const orders =mongoose.model('Order',orderSchema);

export default orders