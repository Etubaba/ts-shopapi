 import express ,{Router}from 'express';
 import {deleteOneCartItem,createCart,clearAllCartItems,getUserCart} from '../controllers/cartController';

 const router:Router=express.Router();
 router.delete('/delete/cartitem',deleteOneCartItem)
 router.post('/create/cart',createCart)
 router.delete('/clear/user/cart/:id',clearAllCartItems)
 router.get('/user/cart/:id',getUserCart)

 export default router