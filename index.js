const express=require("express");
const DB = require("./db");
const student = require("./Student.Model");
const app=express()

app.get("/student",async(req,res)=>{
  const data=await student.find()
  res.send(data)
})

app.get("/students/:id",async(req,res)=>{
  let id=req.params
  const data=await student.findById()
  res.send(data)
})

app.post("/student",async(req,res)=>{
  let data=await student.create(req.body)
  res.send(data)
})

app.patch("/student/:id",async(req,res)=>{
  let id=req.params
  let data=await student.findByIdAndUpdate(id.req.body)
  res.send(data)
})

app.delete("student/:id",async(req,res)=>{
  let {id}=req.params
  let data=await student.findByIdAndDelete(id)
  res.send(data)
})
app.listen(8090,()=>{
  console.log("listing on http://localhost:8090",DB);
  
})