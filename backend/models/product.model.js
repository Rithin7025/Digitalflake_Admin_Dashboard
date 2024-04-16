import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
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
        type : Number,
        required  : true
    },
    status : {
        type : String,
        required : true
    },
    isHided : {
        type : Boolean,
        default : false
    }
})

const Product = mongoose.model('Product',productSchema)
export default Product