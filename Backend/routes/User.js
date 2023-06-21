
const router =require("express").Router();
const {verifyToken,verifyTokenAndAdmin}=require("./verifyToken");
const User=require("../models/User");

//UPDATE
//verifyTokenAndAdmin
router.put("/:id",verifyTokenAndAdmin,async(req,res)=>{

    if(req.body.password){
        req.body.password=CryptoJS.AES.encrypt(
            req.body.password,
            process.env.Pass_Sec
        ).toString()
    }
    try {
        console.log("OK");
        const UpdateUser=await User.findByIdAndUpdate(
            req.params.id,
            {
                $set:req.body
            },
            {new:true}
        )

        res.status(200).json(UpdateUser);
    } catch (error) {
        console.log(error);
    }

})

module.exports=router