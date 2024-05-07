const mongoose= require("mongoose")

const Userschima= new mongoose.Schema({
    name:String,
    email:String,
    age:Number

})


const UserModal=mongoose.model('user', Userschima);
module.exports=UserModal;
