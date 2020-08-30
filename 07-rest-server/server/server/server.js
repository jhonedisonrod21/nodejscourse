require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use(require('./routes/user').userRoutes);

app.get('/',(req,res)=>{
    res.send('A ver cual es la joda par de catrejijueputas');
});

mongoose.connect('mongodb://jhon:jerm1998@127.0.0.1:27017/cafe?connectTimeoutMS=1000&bufferCommands=false',{ useUnifiedTopology: true,useNewUrlParser: true},(err,res)=>{
    if (err) throw err
    else if(res) console.log('conected o the db');    
}); 

app.listen(process.env.PORT,()=>{
    console.log(`su servidor express esta escuchando en el puerto ${process.env.PORT}`);
});

