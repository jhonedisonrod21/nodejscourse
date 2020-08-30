const express = require('express');
const User = require('../models/user');  
var app = express();

app.get('/users',(req,res)=>{
    res.send('vaee get')
});

app.post('/users',(req,res)=>{ 
    var user = User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        img:req.body.img,
        role:req.body.role,
        status:req.body.status,
        google:req.body.google
    });
    try{ 
        user.save((err,userdb)=>{
            if (err) {
                res.status(400).json({ 
                    ok:false,
                    message:'Ocurrio un error al subir la información a la base de datos',
                    err:err
                }); 
            }
            else {
                res.status(200).json({ 
                    ok:true,
                    message:'Se guardo el registro correctamente',
                    userdb:userdb
                })
            }
        })
    }catch(err){
        console.log(err);
    }
});
app.put('/users',()=>{
    
})
app.delete('/users',()=>{

})


module.exports = {
    userRoutes:app
}