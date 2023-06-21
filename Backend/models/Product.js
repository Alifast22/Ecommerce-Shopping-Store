
const { boolean } =require("webidl-conversions");
const mongoose= require("mongoose");

const ProductSchema =new mongoose.Schema({

    title : {
        type:String,
        required:true,    
        
    },
    des : {
        type:String,
        required:true,
    },
    img : {
        type:String,
        required:true
    },
    categories: {
         type:Array
    },
    size:{
      type:String
    },   
    color: {
      type:String
    },  
    price:{
      type:Number,
      require:true
    } 
},{timestamps:true}
)

const Product = new mongoose.model("Product",ProductSchema);

module.exports= Product;