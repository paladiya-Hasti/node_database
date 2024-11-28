
const mongoose=require("mongoose")
const DB=async()=>{
  await mongoose.connection("mongodb+srv://hastipaladiya2001:abcd12345@cluster0.dv3mi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}
module.exports=DB