import mongoose, { Schema } from "mongoose";
import IUser from '../interface'


const {Document } = mongoose



const userSchema: Schema= new Schema<IUser>({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


const User = mongoose.model<IUser>('User', userSchema);
export default User;