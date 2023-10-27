const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
email: {
    type : String,
    // unique:true,
},
password: {
    type:String,
},
conf_password:{
    type:String,
},

});

module.exports = mongoose.model("user",userModel);