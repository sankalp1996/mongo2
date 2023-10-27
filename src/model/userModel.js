const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
email: {
    type : String,
    lowercase:true,
    required:true,
},
password: {
    type:String,
    required:true,
    minLength: [6, 'minimum 6 chars required'],
    maxLength: [12, 'maxmium 12 allowed']
},
conf_password:{
    type:String,
},

});

module.exports = mongoose.model("user",userModel);