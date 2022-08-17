import mongoose from "mongoose";
const {Schema}=mongoose

interface OrderI{
    userId:String,
    productId:String,
    productName:String,
    price:Number,
    transactionId:String
    image:String,
    
}
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
    price:{type:String, required:true},
    image:{type:String, required:true},
    transactionId:{type:String, required:true},
})

const orders =mongoose.model('Order',orderSchema);

export default orders