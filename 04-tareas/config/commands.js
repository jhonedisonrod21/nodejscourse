let createrargs = {
    description:{
        demand:true,
        alias:'d',
        description: 'es el cuerpo o descripcion de la tarea a modificar',
        default:1
    },
};

let checkargs = {
    description:{
        demand:true,
        alias:'d',
        description: 'es la descripcion de la tarea a modificar',
        default:''
    },
    completed:{
        demand:true,
        alias:'c',
        description: 'booleano que confirma el estado de la tarea',
        default:true
    }
};

let listargs = {};

const argv = require('yargs').
command(["create","crear"],"Crea una nueva tarea",createrargs).
command(["list","listar"],"Muestra una lista de las tareas",listargs).
command(["check","marcar"],"permite marcar una tarea como realizada",checkargs).
command(["remove","remover"],"elimina una tarea de la lista",createrargs).
help().argv;

module.exports = {
    argv
}