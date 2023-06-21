const express= require("express");
const app=express();
const mongoose= require("mongoose");
const cors = require('cors');
const dotenv=require("dotenv");
const authRouter=require("./routes/Auth");
const userRouter=require("./routes/User");
const chatRouter=require("./routes/Chat");
const orderRouter=require("./routes/Order")
const cartRouter=require("./routes/Cart")
const pushRouter=require("./routes/Push")
const productRouter=require("./routes/Product");


dotenv.config();
app.use(cors());




const port=process.env.port || 5000;

app.use(express.json());


mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("DB connected"))
.catch((err)=> console.log(err));

app.use("/auth",authRouter)
app.use("/user",userRouter)
app.use("/chat",chatRouter)
app.use("/order",orderRouter)
app.use("/cart",cartRouter)
app.use("/push",pushRouter)
app.use("/product",productRouter)

app.listen(port,()=>{
    console.log(`server running at ${port}`);
});











