const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connect = require('./config/db');
dotenv.config({path: "./config.env"});
mongoose.set('strictQuery', true);

const app = express();
connect();




app.get('/health', (req, res) => {
    res.send("Health api Home");
});

// app.get('/health', (req, res) =>{
//     res.send("Health api updated");
// })


app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("listening on port 3000");
})
