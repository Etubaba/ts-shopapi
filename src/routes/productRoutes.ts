 import express ,{Router}from 'express';
 import storage from '../config/cloudstore';
 import multer from 'multer';
 import {productList,createProduct,updateProduct,deleteProduct ,getSingleProduct} from '../controllers/productControl';

 const router:Router=express.Router();
 const upload=multer({});

 router.get('/products',productList)
 router.get('/product/:id',getSingleProduct)
 router.post('/create/product',upload.single('image'),createProduct)
 router.put('/update/product/:id',upload.single('image'),updateProduct)
 router.delete('/delete/product/:id',deleteProduct)

 
 export default router
