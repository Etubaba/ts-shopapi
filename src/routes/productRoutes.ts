 import express ,{Router}from 'express';
 import storage from '../config/cloudstore';
 import multer from 'multer';
 import {productList,createProduct,updateProduct,deleteProduct } from '../controllers/productControl';

 const router:Router=express.Router();
 const upload=multer({storage:storage});

 router.get('/products',productList)
 router.post('/create/product',upload.single('image'),createProduct)
 router.put('/update/product/:id',upload.single('image'),updateProduct)
 router.delete('/delete/product/:id',deleteProduct)

 
 export default router
