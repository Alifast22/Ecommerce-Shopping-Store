const mongoose= require("mongoose");
const { boolean } =require("webidl-conversions");

const CartSchema =new mongoose.Schema({

    title : {
        type:String,
       // required:true,    
     
    },
    product: [
        {
            productId:{
              type: String,
              required:true
            },
            quantity:{
                type: Number,
                default:1
            },
            size:{
                type:String
            },
            producttitle:{
                type:String
            },
            price:{
                type:Number
            },
            img:{
                type:String
            }            
            ,color:{
                type:String
            }            
            ,size:{
                type:String
            }
        }
    ] 
}
)

const Cart = new mongoose.model("Cart",CartSchema);

module.exports= Cart;