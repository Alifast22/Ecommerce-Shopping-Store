var express = require('express');
var router = express.Router();

const Product=require("../models/Product");

// const db=mysql.createPool({
//   host: "localhost",
//   user:"root",
//   password:"admin123",
//   database:"payroll",
// });
 router.get("/",async (req,res)=>{
//     const select="select * from product where product_cat=?"
//     db.query(select,[req.query.category],async (err,result)=>{
//       console.log(result);
//       res.send(result)
//     })
//   
console.log(req.query.category)
  prods= await Product.find({ categories: req.query.category })

  console.log(prods)
  res.send(prods)
})
  module.exports = router;
//   prods= await Product.find({ categories: req.query.category })
//   console.log(prods)
//   res.send(prods)