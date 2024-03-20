
 const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:[true, "Please add the username"]
    },
    email:{
        type:String,
        required:[true, "Add the contact email"],
        unique:[true, "email address already taken"]
    },
    password:{
        type:String,
        required:[true,"please add the user password"]
    },
},{Timestamps:true});

module.exports=mongoose.model("User",userSchema);