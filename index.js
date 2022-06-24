const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { application } = require('express');

dotenv.config();


const port = process.env.port || 3300;
const app = express();


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

