import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import cors from 'cors'



const app = express();
const port = process.env.PORT;

import connectDB from '../backend/database/db.js';
import adminRoutes from './routes/adminroutes/admin.routes.js'; 
import adminAuthRoutes from './routes/adminroutes/auth.routes.js';
import errorHandler from './middlewares/errorhandler.js';
connectDB();

//setting cors
app.use(cors({
    origin : ["http://localhost:3000"],
    methods : ["GET","PUT","POST","DELETE","PATCH"],
    credentials : true
}))

app.use(express.json());
// Parse URL-encoded bodies with extended options
app.use(express.urlencoded({extended : true}));
app.use(cookieParser())

app.use('/api/admin',adminRoutes);
app.use('/api/admin/auth',adminAuthRoutes);

app.get('/test',(req,res)=>{
res.json({message : 'test object'});
})

app.listen(port,()=>{
    console.log(`🚀server is runnin on ${port}`)
})

//error middleware
app.use(errorHandler)