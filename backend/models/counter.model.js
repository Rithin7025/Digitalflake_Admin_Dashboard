import mongoose from "mongoose";
const  {Schema} = mongoose;

const counterSchema = new Schema({
    count : {
        type : Number,
        default : 0
    }
})

const Counter = mongoose.model('Counter',counterSchema);
export default Counter