const express = require("express");

//step1 : require the database file
const connectDB = require("./config/database");

const User = require("./models/user")

const app = express();

app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Soham",
    LastName: "Bi",
    email: "sb@gmail.com,",
    password: "#123",
  };
// creating an instance of the user model 
  const user = new User(userObj)

  await user.save();
  res.send("successfully added");

  


});

//step 2 :first connect to Datacase
connectDB()
  .then(() => {
    console.log("Data connected");
    // step3 :then connect to port
    app.listen(3000, () => {
      console.log("connected to port");
    });
  })
  .catch((error) => {
    console.log("Data not connected");
  });

// const user = require("./models/user")

// app.post("/signup", async (req, res)=>{
//     const userObj = {
//         firstsName: "Soham",
//         lastName:"Biswas",
//         emailID:"email",
//         password : "password"

//     }
//  const user = new user(userObj);

//   await user.save()
//   res.send("user added")
// })

// app.get("/ab+c" , (req , res)=>{

//     res.send({firstName: "SohamBiswas",
//         LastName:"Biswas",
//         Hobby:"Football" })
// })
// app.post("/user" , (req , res)=>{

//     res.send("saved scucessfully")})

// app.use("/signup",(req , res)=>{

//     res.send("hello");
// })

// app.use("/",(req , res)=>{

//         res.send("hii");
// })
