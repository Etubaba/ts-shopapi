import mongoose from "mongoose";
const {Schema}=mongoose

interface CartI{
    userId:String,
    productId:String,
    productName:String,
    price:Number,
    image:String,
    
}
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
    price:{type:String, required:true},
    image:{type:String, required:true},
})

const cart =mongoose.model('Cart',cartSchema);

export default cart