import { Response, Request, response } from "express";
import Product from "../models/products";
import Iproduct from "../interface";


const productList = async (req: Request, res: Response) => {

    try {
        const Products = await Product.find({})
        res.status(200).json({ status: true, data: Products });
    } catch (err: any) {
        res.status(500).json({ status: false, msg: `${err.message}` });
    }

}

const createProduct = async (req: Request, res: Response) => {
console.log('i de work');
    const {  productName, description, price }: Iproduct = req.body

         const {path}:any= req.file
         const image=path


    if (!image || !productName || !description || !price) return res.status(401)
        .json({ status: false, msg: 'All fields are required' })
    try {
        const newProduct = await Product.create({
            image,
            productName,
            description,
            price
        })
        res.status(201).json({ status: true, data: newProduct });
    } catch (err: any) {
        console.log(err);
        // res.json({ status: false, msg: `${err.message}` });
    }

}

const deleteProduct = async (req: Request, res: Response) => {
    const id: string = req.params.id
    if (!id) res.status(400).json({ 'status': false, 'message': 'id is required' });
    try {
        const productToDelete = await Product.findByIdAndDelete(id)
        if (!productToDelete) res.status(404).json({ 'status': false, 'msg': 'Product not found' });
        res.status(200).json({ status: true, msg: `product with id ${id} deleted successfully` });
    } catch (err: any) {
        res.status(500).json({ status: false, msg: `${err.message}` });
    }

}

const updateProduct = async (req: Request, res: Response) => {
    const id: string = req.params.id
    if (!id) res.status(400).json({ status: false, msg: `ID required ` });
    const { image, productName, description, price, rating }: Iproduct = req.body

    try {
        const productToUpdate = await Product.findOne({ _id: id })

        if (productToUpdate) {
            productToUpdate.price = price,
                productToUpdate.rating = rating,
                productToUpdate.description = description,
                productToUpdate.productName = productName,
                productToUpdate.image = image
            const saveAm = productToUpdate.save()
            res.status(200).json({ status: true, msg: 'product updated successfully' })
        } else {
            res.status(404).send({ status: false, msg: 'User not found' });
        }



    } catch (err: any) {
        res.status(500).json({ status: false, msg: `${err.message}` });
    }
}


export { productList,deleteProduct,createProduct,updateProduct}