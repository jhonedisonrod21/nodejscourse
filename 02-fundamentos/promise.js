let empleados = [
    {
        id:1,
        nombre:"fernado"
    },{
        id:2,
        nombre: "alejandro"
    },{
        id:3,
        nombre: "manolo"
    }];

let salarios = [{
    id:1,
    salario: 2000
},{
    id:2,
    salario: 3000
}];

let getempleado = (id) =>{
    return new Promise((resolve,reject)=>{
        let empleado = empleados.find(empleado => empleado.id === id);
        if (!empleado) {
            reject(`El empleado con id ${id} no fue encontrado en la base de datos`)
        }else{
            resolve(empleado);
        }
    });
}

// getempleado(1).then(empleado =>{
//     console.log('se encontro el siguiente empleado',empleado);
// },(err)=>{
//     console.log(err);
// });


let getSalary = (empleado) =>{
    return new Promise((resolve,reject) => {
        let salario = salarios.find(salario => salario.id === empleado.id);
        if (!salario) {
            reject(`el empleado con id ${empleado.id} no tiene un salario activo`);
        }else{
            resolve({
                id: empleado.id,
                nombre:empleado.nombre,
                salario:salario.salario
            });
        }
    });
}

// getSalary(empleados[1]).then(resultado =>{
//     console.log(`su respuesta`,resultado);
// },(err) =>{
//     console.log(err);
// });

getempleado(5).then(empleado =>{
    return getSalary(empleado);
}).then(resp =>{
    console.log(`El salalrio de ${resp.nombre} es de ${resp.salario}`);
}).catch(err => {
    console.log(err);
})