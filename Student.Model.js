const mongoose=require("mongoose")

const  StudentSchema=new mongoose.Schema({
  name:String,
  number:Number,
  Course:String
})
const student=mongoose.model("student",StudentSchema)
module.exports=student