import express from 'express'
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, clerkClient, requireAuth, getAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import userRouter from './routes/userRoutes.js';
import connectCloudinary from './config/cloudinary.js';


/* 1>clerkMiddleware parses the req and attaches and auth object to it
   2> required auth is used a route protector 
*/


const app = express();
 await connectCloudinary();


app.use(
cors({
origin: process.env.FRONTEND_URL,
credentials: true,
})
);

app.use(express.json());
app.use(clerkMiddleware());



app.get('/',(req,res)=>{
    res.send('Server is live!');
})  // public route

app.use(requireAuth());
// routes  all are protected 

app.use('/api/ai',aiRouter);
app.use('/api/user',userRouter);



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})