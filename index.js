const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connect = require('./config/db');
dotenv.config({path: "./config.env"});
mongoose.set('strictQuery', true);
// const bodyParser = require('body-parser');
const admin = require("./routes/Admin");
const discover = require("./routes/Discover");

const app = express();
connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


//middleware
const errorHandler = (req, res, next)=>{
    const name = req.body.name;
    const err = new Error("Something went wrong! Please try after some time.");

    if(name === "String"){
        res.json({error: Error});
    }
    else{
        next();
    }
} 


app.get('/api/health', (req, res) => {
    res.send("Health api Home");
});

app.post('/admin', errorHandler, (req, res) =>{
    const imgName = req.body.name;
    res.send(imgName) ;
})
app.use('api/admin', errorHandler, admin);

app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("listening on port 3000");
})
