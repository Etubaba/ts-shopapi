import { Response, Request, response} from 'express'
import orders from '../models/order'
import Product from '../models/products'
import IOrder, { addOrder } from '../interface'



const createOrder= async (req: Request, res: Response) => {
     const {userId,transactionId,productId}:addOrder=req.body
     if(!userId || !productId || !transactionId)res.status(400).json()


try{
     for(let i=0;i<productId.length;i++) {
        const productPayFor = await Product.findOne({_id:productId[i]})
        if(productPayFor){
              const order= await orders.create({
                    userId,
                    productId:productId[i],
                    productName:productPayFor.productName,
                    price:productPayFor.price,
                    image:productPayFor.image,
                    transactionId,
                         
               })
               res.status(200).json({status:true,data:order})
        }else{
           res.status(401).json({status:false,msg:'no product with that id'})
        }
     }

}catch(err: any) {
     res.status(500).json({message: err.message});
}
}


const updateOrder= async (req: Request, res: Response) => {
     // const id:string = req.params.id;
     const{ orderId,status}= req.body;

     if (!orderId) res.status(400).json({message: 'OrderId is required.'});

     try{
         const order= await orders.findOne({_id:orderId});

           if(order){
               order.status= status
               const saving = await order.save()
               res.status(200).json({message: `Order updated to ${status} successfully.`});
           }
     }catch(err: any) {
          res.status(500).json({message: err.message});
     }
}


const userOrder= async (req: Request, res: Response) => {
     const userId: string = req.params.id

     try{
          const userorders= await orders.find({userId})
          if(userorders){
               res.status(200).json({status:true,data:userorders});
          }else{
               res.status(200).json({status:false,msg:'This user has no order'});
          }
     }catch(err: any) {
          res.status(500).json({status:false,msg:err.message});
     }


}

const allOrders = async (req: Request, res: Response) => {
     try{
        const order = await orders.find({})
        res.status(200).json({status:true,data: order})
     }catch(err: any) {
          res.status(500).json({status:false,msg:err.message});
     }
}


export {allOrders,updateOrder,userOrder,createOrder}