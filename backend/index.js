import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'


const app = express();
const port = process.env.PORT;

import connectDB from '../backend/database/db.js';
import adminRoutes from './routes/adminroutes/admin.routes.js'; 
import adminAuthRoutes from './routes/adminroutes/auth.routes.js';
connectDB();
app.use(express.json());
// Parse URL-encoded bodies with extended options
app.use(express.urlencoded({extended : true}));

app.use('/admin',adminRoutes);
app.use('/admin/auth',adminAuthRoutes);

app.get('/test',(req,res)=>{
res.json({message : 'test object'});
})

app.listen(port,()=>{
    console.log(`🚀server is runnin on ${port}`)
})