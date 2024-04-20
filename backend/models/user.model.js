import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose ;

const userSchema = new Schema({
    userName : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
        
    },
    role : {
        type : String,
    }
    
}, { timestamps : true })

const User = mongoose.model('User',userSchema);

export default User;