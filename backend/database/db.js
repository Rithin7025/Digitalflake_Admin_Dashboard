import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async()=> {
    try{
        const dbConnection = await mongoose.connect(process.env.MONGOURI)
        console.log(process.env.MONGOURI,'here siteh ')
        console.log(`MongoDB connected : ${dbConnection.connection.host}`)
    }catch(err){
        console.log(`Database error : ${err}`)
        process.exit(1)
    }

}

export default connectDB;