const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nationalId:{
       type: Number,
       required: true,
       min:[16, 'only 16 numbers allowed'],
       max:[16, 'only 16 numbers allowed']
    },
    names:{
        type:String,
        required: true,
        min:[5, 'Names should not be less than 5 characters'],
        max:[50, 'Names should not go beyond 50 characters']
    },
    email:{
        type:String,
        unique:true,
        required: true
    },

    password:{
        type:String,
        required: true,
        min:[6,'weak password'],
        max:[255,'strong password']
    }
});

module.exports = mongoose.model("User", userSchema);