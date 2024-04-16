import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'


const app = express();
const port = process.env.PORT;

import connectDB from '../backend/database/db.js';
connectDB();

app.get('/',(req,res)=>{
res.send('Hello world');
})

app.listen(port,()=>{
    console.log(`🚀server is runnin on ${port}`)
})