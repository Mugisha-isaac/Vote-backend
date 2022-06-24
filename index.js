const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose')

dotenv.config();


const port = process.env.port || 3300;
const app = express();

//connecting to the server

mongoose.connect(process.env.DB).then(()=>{
    console.log('connected to the server successfully');
}).catch((err)=>{
    console.log('Error occurred while connecting to db: ', err);
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

