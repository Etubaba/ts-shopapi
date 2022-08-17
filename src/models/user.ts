import mongoose from "mongoose";


const {Schema}=mongoose

interface UserInter {
    email:string;
    username:string;
    password:string;
}

const userSchema=new Schema<UserInter>({
    email:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true}
})


const User = mongoose.model('User',userSchema);
export default User;