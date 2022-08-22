import {Response, Request, response} from 'express'
import { addItem, deleteItem } from '../interface'
import cart from '../models/cart.js'
import Product from '../models/products.js'






const createCart= async (req: Request, res: Response) => {
    const {userId,productId}:addItem=req.body 
    if (!userId || !productId)res.status(401).json({status:false,msg:'All fields are required.'})

    try{
      const addedProduct =await Product.findOne({_id:productId})
      
    if(!addedProduct){
        res.status(400).json({status:false,msg:'No such product.'})
    }else{
           const newCart =await cart.create({
                    userId,
                    productId,
                    productName:addedProduct.productName,
                    price:addedProduct.price,
                    image:addedProduct.image,
           })  
           res.status(200).json({status:true, data:newCart})
    }


    }catch(err: any){
        res.status(500).json({status:false,msg:`${err.message}`})
    }





}





const  getUserCart= async (req: Request, res: Response) => {
    const id:string = req.params.id
    if(!id) return res.status(401)
     try{
       const cartItem= await cart.find({userId:id})

     if(!cartItem) return res.status(401).json({status:false, msg:'User has no cart item'})
      
     res.status(200).json({status:true,data:cartItem})


     }catch (err: any) {
        res.status(500).json({status:false,msg:`${err.message}`})
     }
}
const deleteOneCartItem =async (req:Request, res:Response) => {
    const {userId,cartId }:deleteItem= req.body
    if(!userId || !cartId) return res.status(401).json({status:false,msg:'All fields are required'})
    try{
       const userCart= await cart.findOneAndDelete({$and:[{_id:cartId},{userId}]})
       if(!userCart) return res.status(400).json({status:false,msg:'user has no cart'});

        res.status(200).json({ status: true, msg: `cart item deleted successfully` });


       }catch(err:any){
     res.status(500).json({status:false,msg:`${err.message}`})
       }
}



const clearAllCartItems= async (req: Request, res: Response) => {
    const id : string = req.params.id

    try{
        const items= await cart.deleteMany({userId:id})


        if(!items)return res.status(401).json({status:false,msg:'no cart found'})

      res.status(200).json({status:true, msg:'Cart Cleared successfully'})

    }catch(err:any){
        res.status(500).json({status:false,msg:`Something went wrong. ${err.message}`})
    }

}


export {deleteOneCartItem,clearAllCartItems,getUserCart,createCart}