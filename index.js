const express = require('express');
const dotenv = require('dotenv');
let mongoose = require('mongoose');

const app = express();

dotenv.config({path: "./config.env"});
const DB = process.env.DB;


mongoose.connect(DB, {useNewUrlParser: true});
// mongoose.set('strictQuery', true);



app.get('/', (req, res) => {
    res.send("Health api Home");
});

app.get('/health', (req, res) =>{
    res.send("Health api updated");
})


app.listen(process.env.PORT || 3000, (req, res) => {
    console.log("listening on port 3000");
})
