import mongoose, { Schema } from "mongoose";


const {Document } = mongoose

interface IUser extends Document {
    email: string;
    username: string;
    password: string;
}

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