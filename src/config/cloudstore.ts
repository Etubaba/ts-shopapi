import { v2 as cloudinary } from 'cloudinary'
import {CloudinaryStorage } from 'multer-storage-cloudinary'


cloudinary.config({
    cloud_name:'dyacbdach',
    api_key:`${process.env.CLOUDINARY_API_KEY}`,
    api_secret:`${process.env.CLOUDINARY_SECRET_KEY}`,
    secure: true
});

type levels ={
    folder:string,
    allowedFormats:string[]
}
 const options ={
 
       folder: 'CloudinaryDemo',
       allowedFormats: ['jpeg', 'png', 'jpg']
       
    }
const storage = new CloudinaryStorage({
    cloudinary,
    params:options
});



export default storage