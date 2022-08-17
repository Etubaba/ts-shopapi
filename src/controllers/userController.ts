import { Response,Request } from "express";
import User from "../models/user";
import bcrypt from 'bcrypt'


const handRegistration= async (req:Request, res:Response) => {

    type userTypes ={
        username:string,
        password:string,
        email:string
    }
   
    const {username,password,email}:userTypes=req.body
    if(!username ||!password||!email) res.status(401).json({status:false,message:'All fields are required'})

    //does the user exist already
    const userCheck=await User.findOne({username,email});

    if(userCheck)res.status(400).json({status:false,message:'User already exists'})

    //create a new user
    try{
     const encryptedPassword = await bcrypt.hash(password,10)
       const newUser = await User.create({
        username,
        password:encryptedPassword,
        email
       })
    res.status(201).json({staus:true,data:newUser})
    }catch(err:any) {
        console.log(err.message);}

}


//user Authentication

const userAuth=async (req:Request, res:Response) => {
    type loginTypes ={
        email:string | undefined,
        username:string | undefined,
        password:string
    }
    type userTypes ={
        email:string 
        username:string
        password:string
    }
const {email,username,password}:loginTypes = req.body

const userChoice:string|undefined = email===undefined ? username:email

const user:userTypes =  await User.find({
    $or:[
        {
            email:email
        },
        {
            username:username
        }
    ]
})

const match:boolean=await bcrypt.compare(user.password,password)



}