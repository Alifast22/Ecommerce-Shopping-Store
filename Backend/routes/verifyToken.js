const jwt=require("jsonwebtoken");

const verifyToken = (req,res,next) =>{
    const Head=req.headers.token;

    if(Head){
        const token=Head.split(" ")[1];
        console.log(process.env.JWT_Sec);
        jwt.verify(token,process.env.JWT_Sec,(err,user) =>{
             if(err){
                console.log(err);
            }
            req.user=user;
            console.log(req.user);
             next();
        })
    }
    else{
        res.status(400).json("You are not authenticated");
    }
}

const verifyTokenAndAdmin = (req,res,next) =>{
    verifyToken(req,res,()=>{
        console.log(req.user.username,"OK",req.params.id)
       if(req.user.id===req.params.id || req.user.isAdmin){
        next();
       }
       else{
        res.status(400).json("You are not permitted");
       }
    })
}

module.exports={verifyToken,verifyTokenAndAdmin}