const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nationalId:{
       type: Number,
       required: true,
    },
    names:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        unique:true,
        required: true
    },

    password:{
        type:String,
        required: true,
    },
    voted:{
        type:Boolean,
        required:true,
        default:false
    }
});

module.exports = mongoose.model("User", userSchema);