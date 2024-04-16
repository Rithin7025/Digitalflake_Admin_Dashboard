import mongoose from 'mongoose'
const {Schema} = mongoose

const categorySchema = new Schema({
    categoryName : {
        type : String,
        required : true
    },
    description : {
        type : String, 
        required : true
    },
    status : {
        type : String,
    }
})

const Category = mongoose.model('Category',categorySchema)
export default Category