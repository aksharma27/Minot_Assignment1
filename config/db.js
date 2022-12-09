let mongoose = require('mongoose');
// const router = require('router');
// let Schema =  mongoose.Schema;


const DB = process.env.DB;

const connect = ()=>{




    mongoose.connect(process.env.DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(()=>{
            console.log("Db connected");
        })
        .catch((error)=>{
            console.log("db error: ", error)
        });
// mongoose.set('strictQuery', true);
}

module.exports = connect;