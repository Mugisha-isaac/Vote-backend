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
    },
    imgUrl:{
        type:String,
        required: false,
        default:'https://www.ktpress.rw/wp-content/uploads/2020/09/50312364806_48ae45bf32_c.jpg'
    },
    votedUsers:[
        {
          name:{
            type:String,
            required: true
          },
          email:{
            type:String,
            required: true
          }
        }
    ]
});

module.exports = mongoose.model("Candidate", candidatesSchema);


