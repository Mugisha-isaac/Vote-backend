const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const candidatesSchema = new Schema({
    names:{
        type:String,
        required: true,
    },
    votes:{
        type:Number,
        required: true,
        default:0
    }
});

module.exports = mongoose.model("Candidate", candidatesSchema);


