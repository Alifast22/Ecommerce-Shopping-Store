
const router =require("express").Router();

const Cart=require("../models/Cart");

//UPDATE
//verifyTokenAndAdmin

router.post('/post', (req, res) => {
    const { title,product } = req.body;
    const project = new Cart({ title,product});
  
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
       
        const Cartfound=await Cart.find();

        res.status(200).json(Cartfound);
    } catch (error) {
        console.log(error);
    }

})

router.get('/find/:title', async (req, res) => {
  const title = req.params.title;
  try {
    const product = await Cart.find({ title });
    if (!product) {
      return res.status(404).json({ error: 'No product in cart' });
    }
    return res.json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

router.get('/delete/:title', async (req, res) => {
  const title = req.params.title;
  try {
    const product = await Cart.deleteMany({ title:title });
    if (!product) {
      return res.status(404).json({ error: 'No product in cart' });
    }
    return res.json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: 'Server error' });
  }
});


router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
      const result = await Cart.findByIdAndRemove(id);      
      if (result) {
          res.json({ message: 'Document deleted' });
      } else {
          res.status(404).json({ message: 'Document not found' });
      }
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

module.exports=router