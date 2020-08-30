const fs = require('fs');
var colors = require('colors');
let {UPTC} = require('../util/ascci_art')
let db = [];


const saveDB = () => {
    let obj = JSON.stringify(db);
    fs.writeFile('./db/data.json',obj,function(err){
        if(err){
            throw new Error('ocurrio un problema al conectarse con la base de datos');
        }
    });
}

const loadData = () =>{
    try {
        db = require('./data.json');
    } catch (error) {
        console.log(error);
    }    
}

const crear = (descripcion) =>{    
    loadData();
    db.push({
        descripcion,
        status : false
    });
    saveDB();
}

const getlistado = () =>{
    loadData();
    console.log("==========================================".blue);
    console.log(UPTC.yellow);
    console.log("==========================================".blue);
    console.log("====== Actividad ======||==== Estado =====".blue);
    db.forEach(item => {
        console.log(`${item.descripcion} || ${item.status}`);
    }); 
}

const update = (descripcion,status = true) => {
    loadData();
    let index = db.findIndex(item =>  item.descripcion === descripcion);   
    if(index >= 0){
        db[index].status = status;
    }else{
        return false;
    }
    saveDB();
} 

const remove = (descripcion)=>{
    loadData();
    let index = db.findIndex((item) => {
        return item.descripcion === descripcion;
    });
    if (index >= 0) {
        db.splice(index,1);
    }
    saveDB();
}


module.exports = {
    crear,
    getlistado,
    update,remove   
}