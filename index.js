import cors from "cors"
import express from "express";
import mongoose from "mongoose"
import dotenv from "dotenv"
import router1 from "./router.js";
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
dotenv.config()
app.use("/user",router1)
const db = mongoose.connect(process.env.DB_URL)
db.then(()=>{
    console.log("connection success");
}).catch(()=>{
  console.log("connection failed");  
})
app.listen(7007,()=>{console.log("server st");})