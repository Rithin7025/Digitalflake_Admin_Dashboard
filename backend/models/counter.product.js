import mongoose from "mongoose";
const  {Schema} = mongoose;

const counterSchema = new Schema({
    count : {
        type : Number,
        default : 0
    }
})

const CounterProduct = mongoose.model('CounterProduct',counterSchema);
export default CounterProduct