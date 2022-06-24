const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const {userRoutes} = require('./Routes/User.routes');

dotenv.config();


const port = process.env.port || 3300;
const app = express();

//connecting to the server

mongoose.connect(process.env.DB).then(()=>{
    console.log('connected to the server successfully');
}).catch((err)=>{
    console.log('Error occurred while connecting to db: ', err);
})



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req,res)=>{
   res.send(`welcome to voting system backend ✌️ `);
})

app.use('/user', userRoutes);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

