

const express = require('express') 

const app = express();

app.use("/",(req , res)=>{

        res.send("hii");
})
app.use("/signup",(req , res)=>{

    res.send("hello");
})

app.listen(3000 , ()=>{

    console.log("succesfully connected")
});


