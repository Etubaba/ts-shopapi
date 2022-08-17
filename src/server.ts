
import express,{Application} from 'express';
import dotenv from 'dotenv'
import cors from "cors";
import  connectDB  from './config/dbsetup';

const app:Application=express()
dotenv.config();

connectDB()

const port =process.env.PORT || 8000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());




app.listen(port, () => {
  console.log(`server is running on port ${port}, chechout`);
});

