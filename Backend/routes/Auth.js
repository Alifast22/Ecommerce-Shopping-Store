const router =require("express").Router();
const User=require("../models/User");
const CryptoJs=require("crypto-js")
const jwt=require("jsonwebtoken");

//REGISTER
router.post("/register",async(req,res) =>{

    const MakeUser= new User({
        email:req.body.email,
        username:req.body.username,
        password:CryptoJs.AES.encrypt(req.body.password,process.env.Pass_Sec).toString() 
    })
 
    try {
        const CreatedUser=await MakeUser.save();
        res.send(CreatedUser);
    } catch (error) {
        console.log(error)
    }
})

//LOGIN
router.post("/Login",async(req,res) =>{

    try {
        const FindUser=await User.findOne({username:req.body.username})
        !FindUser && res.send("Wrong credentials")
    
        const hashed=CryptoJs.AES.decrypt(FindUser.password,process.env.Pass_Sec)
        const Pass=hashed.toString(CryptoJs.enc.Utf8)
        if(Pass!==req.body.password)
        {
            res.send("Wrong credentials")
        }
        console.log(FindUser);
        const accesstoken=jwt.sign({
            id:FindUser._id,
            isAdmin:FindUser.isAdmin
        },
        process.env.JWT_Sec,
        {expiresIn:"3d"}
        )
        const {password , ...others}=FindUser._doc
        res.status(200).json({...others,accesstoken});

    } catch (error) {
        console.log(error)
    }
})

module.exports=router