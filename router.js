import  express  from "express";
import {customerReg,donarReg , donateBlood , donateOrgans, ngoLog} from "./schema.js";
const router1 = express.Router();

router1.post("/donarreg",async (req,res)=>{
    const {userName , Email , number , password , passwordd} = req.body;
    try{
        const existDonar = await donarReg.findOne({Email})
        if(existDonar){
            return res.status(400).json({message:"user exist"})
        }
        const newDonar = new donarReg({userName , Email , number , password , passwordd})
        await newDonar.save()
        console.log("Data saved");
        res.status(200).json({message:"register success"})

    } catch (err){
        res.status(500).json({type:err.message})
    }
})
router1.post("/ngolog",async (req,res)=>{
    const {ngoid , password} = req.body;
    try {
        const usr = await ngoLog.findOne({ ngoid })
        if (!usr) {

            res.status(401).json({ message: "user not found" })
        }
        if (password !== usr.password) {
            return res.status(401).json({ message: "password wrong" })      
          } 
        if(usr.ngoid === ngoid && password === usr.password){
            res.status(200).json({message : "login success"});
            console.log("login success");
        }
        
    }catch {
        console.log("internal error")
    }
})

router1.post("/customerreg",async (req,res)=>{
    const {userName , Email , number , password , passwordd} = req.body;
    try{
        const existDonar = await customerReg.findOne({Email})
        if(existDonar){
            return res.status(400).json({message:"user exist"})
        }
        const newDonar = new customerReg({userName , Email , number , password , passwordd})
        await newDonar.save()
        console.log("Data saved");
        res.status(200).json({message:"register success"})

    } catch (err){
        res.status(500).json({type:err.message})
    }
})
router1.post("/donarlog", async (req, res) => {
    const { Email, password } = req.body;
    try {
        const usr = await donarReg.findOne({ Email })
        if (!usr) {

            res.status(401).json({ message: "user not found" })
        }
        if (password !== usr.password) {
            return res.status(401).json({ message: "password wrong" })      
          } 
        if(usr.Email === Email && password === usr.password){
            res.status(200).json({message : "login success"});
            console.log("login success");
        }
        
    }catch {
        console.log("internal error")
    }
});
router1.post("/customerlog", async (req, res) => {
    const { Email, password } = req.body;
    try {
        const usr = await customerReg.findOne({ Email })
        if (!usr) {

            res.status(401).json({ message: "user not found" })
        }
        if (password !== usr.password) {
            return res.status(401).json({ message: "password wrong" })      
          } 
        if(usr.Email === Email && password === usr.password){
            res.status(200).json({message : "login success"});
            console.log("login success");
        }
        
    }catch {
        console.log("internal error")
    }
});
router1.post('/blood-donate', async (req, res) => {
 
    try {
     
      const newDetails = new donateBlood(req.body);
      await newDetails.save();
      res.status(201).json({message:"data saved"});
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  router1.post('/organ-donate', async (req, res) => {
 
    try {
     
      const newDetails = new donateOrgans(req.body);
      await newDetails.save();
      res.status(201).json({message:"you are in live"});
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  router1.get('/donate-lists', async (req, res) => {
  try {
    const data = await donateBlood.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error'});
  }
});
router1.get('/donate-lists1', async (req, res) => {
  try {
    const data = await donateOrgans.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error'});
  }
});

export default router1

