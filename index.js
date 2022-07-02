const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const {userRoutes} = require('./Routes/User.routes');
const {AuthRoutes} = require('./Routes/Auth.routes');
const {CandidateRoutes} = require('./Routes/Candidate.routes');
const {ReactNativeUserRoutes} = require('./Routes/ReactNative.routes');

dotenv.config();


const port = process.env.port || 3300;  
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));
//connecting to the server

mongoose.connect(process.env.DB).then(()=>{
    console.log('connected to the server successfully');
}).catch((err)=>{
    console.log('Error occurred while connecting to db: ', err);
})

const options ={
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Voting System Documented Apis",
            version:"1.0.0",
            description:"Backend Apis For Voting System"
        },

        servers:[
            {
                url:"http://localhost:3300"
            }
        ]
    },
    apis:["./Routes/*.routes.js"]
}


const spec = swaggerJsDoc(options);



app.get('/', (req,res)=>{
   res.send(`welcome to voting system backend ✌️ `);
})

app.use('/user', userRoutes);
app.use('/auth',AuthRoutes);
app.use('/candidates',CandidateRoutes);
app.use('/reactnative',ReactNativeUserRoutes);
app.use('/documentation',swaggerUi.serve,swaggerUi.setup(spec));

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

