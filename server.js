const express=require("express");
//const dotenv=require("dotenv").config();
const mongoose =require("mongoose");
//const errorHandler=require ("./middleware/errorHandler");
const user=require("./routes/userRoutes");
const app=express();

const url="mongodb://localhost:27017/Authentication";
mongoose.connect(url)
.then(()=>{
    console.log("ok");
})
  .catch((error)=>{
    console.error('bad connection',error.message);
  })

app.use("/api/user",user);

const PORT=process.env.PORT || 9000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} ....`);
})