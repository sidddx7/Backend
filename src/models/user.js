
const mongoose =  require('mongoose');

const userSchema = new mongoose.Schema({
     
    firstName:{
        type: String 
 },
    LastName:{
        type: String
    },

    email: {
        type : String
    },
    
     password:{

        type: String
    }


    
});

const User = mongoose.model("User" , userSchema);

module.exports = User;