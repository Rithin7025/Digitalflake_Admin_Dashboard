import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    id : {
        type : Number,
        unique : true
    },
    productName : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    packSize : {
        type : String 
    },
   image : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required  : true
    },
    status : {
        type : Boolean
    }
},{timestamps : true})

const Product = mongoose.model('Product',productSchema)
export default Product