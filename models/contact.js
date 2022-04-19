const mongoose=require('mongoose')

const ContactSchema= new mongoose.Schema({
    name:{type:String, required:true},
    age:Number,
    email:{type:String, unique:true, required:true},
    gender:{type:String, required:true}
})

module.exports=mongoose.model("Contact", ContactSchema)