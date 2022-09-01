 import express ,{Router}from 'express';
 import {userOrder,createOrder,updateOrder,allOrders } from '../controllers/orderControl';


 
 const router:Router=express.Router();


 router.get('/user/order/:id',userOrder)
 router.post('/create/order',createOrder)
 router.put('/update/order',updateOrder)
 router.get('get/orders',allOrders)

 export default router