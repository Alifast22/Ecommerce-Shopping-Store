
const router =require("express").Router();

const Order=require("../models/Order");

//UPDATE
//verifyTokenAndAdmin

router.post('/post', (req, res) => {
    const { title,product,amount,address,status } = req.body;

    const project = new Order({ title,product,amount,address,status });
  
    project.save((err, savedProject) => {
      if (err) {
        console.log(err)
        res.status(500).send(err);
      } else {
        res.status(201).json(savedProject);
      }
    });
  });

router.get("/find",async(req,res)=>{

    try {
       
        const Orderfound=await Order.find();

        res.status(200).json(Orderfound);
    } catch (error) {
        console.log(error);
    }

})

module.exports=router