
const mongoose=require("mongoose")
const dbconnect=async()=>{
  await mongoose.connect("mongodb+srv://hastipaladiya2001:data1234@cluster0.fks9n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  console.log("CONNEctes mongoose db");
  
}
module.exports=dbconnect