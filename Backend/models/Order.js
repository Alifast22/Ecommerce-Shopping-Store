const mongoose= require("mongoose");
const { boolean } =require("webidl-conversions");

const OrderSchema =new mongoose.Schema({

    title : {
        type:String,
        required:true,    
        
    },
    product: [
        {
            productId:{
              type: String
            },
            quantity:{
                type: Number,
                default:1
            }
        }
    ], 
    amount: {type:Number, required: true},
    address: {type:String, required:true},
    status: {type:String, default:"pending"}
},{timestamps:true}
)

const Order = new mongoose.model("Order",OrderSchema);

module.exports= Order;