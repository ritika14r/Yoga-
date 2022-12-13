const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    mobile:Number,
    gender:String,
    age:Number,
    slot:String,
    CardNum:Number,
    cvc:Number,
    expDate:String,
    currDate:Date
});

module.exports=mongoose.model("users",userSchema)