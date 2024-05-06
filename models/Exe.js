const mongoose=require("mongoose");
const {Schema}=mongoose;

const mySchema=new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model("ExeDoc",mySchema)