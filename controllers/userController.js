const userSchema=require("../models/userModel.js");
const asyncHandler=require("express-async-handler");
const bcrypt=require("bcrypt");

const userController={


registerUser:asyncHandler(async(req,res)=>{
  const {userName,email, password}=req.body;
    if(!userName || !email || !password){
res.status(400);
throw new Error("All fields are mandatory");
    }

const userAvairable=await userSchema.findOne({email});
if(userAvairable){
    res.status(400);
    throw new Error("User already registered !");
}

const hashedPassword=await bcrypt.hash(password,10);
console.log("hashed password : ", hashedPassword);
const user=await userSchema.create({
    userName,
    email,
    password:hashedPassword
});
console.log(`user created ${user}`);
    res.json({message:"register the user"});
}),


loginUser:asyncHandler(async(req,res)=>{
    res.json({message:"login user"});
}),
currentUser:asyncHandler(async(req,res)=>{
    res.json({message:"current user information"});
})
}

module.exports= userController;