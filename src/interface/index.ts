import { Document } from "mongoose";

export default interface Iproduct{
    image:String,
    productName:String,
    price:number,
    description:string,
    rating?:number,
}


export default interface OrderI{
    userId:String,
    productId:String,
    productName:String,
    price:number,
    transactionId:String,
    status:String,
    image:String,
    
}


export default interface CartI{
    userId:String,
    productId:String,
    productName:String,
    price:number,
    image:String,
    
}

export default interface IUser extends Document {
    email: string;
    username: string;
    password: string;
}

export type deleteItem ={
    userId:string,
    cartId:string
}
export type addItem ={
    userId:string,
    productId:string
}

export type addOrder={
    transactionId:string,
    userId:string,
    productId:string[]
}