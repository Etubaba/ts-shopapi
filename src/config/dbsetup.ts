import mongoose from "mongoose"


// const nodeEnv: string = (process.env.DATABASE_URI as string)

const connectDB =  () => {
    try {
         mongoose.connect(`${process.env.DATABASE_URI}`)
      console.log(`DB is connected!!!`)
    } catch (err) {
        console.log(err)
    }
}


export default connectDB