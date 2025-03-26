

const express = require('express') 

const app = express();


app.get("/user" , (req , res)=>{

    res.send({firstName: "SohamBiswas",
        LastName:"Biswas",
        Hobby:"Football" })
})
app.post("/user" , (req , res)=>{

    res.send("saved scucessfully")})

// app.use("/signup",(req , res)=>{

//     res.send("hello");
// })

// app.use("/",(req , res)=>{

//         res.send("hii");
// })


app.listen(3000 , ()=>{

    console.log("succesfully connected")
});


