const router =require("express").Router();
const { spawn } = require("child_process");


//REGISTER
router.post("/submit",async(req,res) =>{
console.log("User input",req.body.inputValue)
const python = spawn("python", ["main.py", req.body.inputValue]);    
let processed_data = ''
    python.stdout.on("data", function (data) {
         processed_data = data.toString();
         
    });
    python.stderr.on("data", data => {
        console.error(`stderr: ${data}`);
    })
    python.on("exit", (code) => {
        // Something else here possibly?
        console.log(processed_data)
        res.send(processed_data);
    });
})

module.exports=router