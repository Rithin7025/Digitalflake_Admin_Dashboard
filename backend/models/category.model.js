import mongoose from 'mongoose'
const {Schema} = mongoose

const categorySchema = new Schema({
    id : {
        type : Number,
        unique : true
    },
    categoryName : {
        type : String,
        required : true
    },
    description : {
        type : String, 
        required : true
    },
    status : {
        type : Boolean,
        default : false
    }
},{timestamps : true})

const Category = mongoose.model('Category',categorySchema)
export default Category