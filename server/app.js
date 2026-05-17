import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDb } from './config/db.js';
import todoRoutes from './routes/todoRoutes.js'
import cors from 'cors';
const app=express();
app.use(express.json())
app.use(cors());
app.use("/api",todoRoutes)


async function startServer(){
  try{
await connectDb();

app.listen(process.env.PORT,()=>{
  console.log("start server");
})
  }catch(errr){
    console.log(err);
  }
}
startServer();