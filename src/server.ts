
import express,{Application} from 'express';
import dotenv from 'dotenv'
import cors from "cors";
import  connectDB  from './config/dbsetup';
import userRoute from './routes/userRoutes'
import cartRoute from './routes/cartRoutes'
import orderRoute from './routes/orderRoutes'
import productRoute from './routes/productRoutes'

const app:Application=express()
dotenv.config();

connectDB()

const port =process.env.PORT || 8000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routers
app.use('/',userRoute);
app.use('/',cartRoute)
app.use('/',productRoute)
app.use('/',orderRoute)




app.listen(port, () => {
  console.log(`server is running on port ${port}, chechout`);
});

