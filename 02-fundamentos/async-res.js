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

let getinfo = async(id) =>{
    let empleado = await getempleado(id);
    let respuesta = await getSalary(empleado);
    return respuesta;
}

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

let getSalary = async(empleado) =>{    
        let salario = salarios.find(salario => salario.id === empleado.id);
        if (!salario) {
            throw new Error(`el empleado con id ${empleado.id} no tiene un salario activo`);
        }else{
            return {
                id: empleado.id,
                nombre:empleado.nombre,
                salario:salario.salario
            };
        }
}

getinfo(7).then((res) =>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
});