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

let getEmpleado = (id,callback) =>{
    let empleadodb = empleados.find(empleado =>empleado.id === id);
    if(!empleadodb){
        callback(`no existe el empleado con el id ${id}`,null)
    }else{
        callback(null,empleadodb);
    }
}

getEmpleado(4,(err,empleado)=>{
    if(err){
        console.log(err);
    }else{
    console.log(empleado);
}
});

let getsalary = (empleado,callback) => {
    id = empleado.id;
    salario = salarios.find(salario => salario.id === id);
    if(!salario){
        callback("mk la palmamos no tiene salario trabaje vago",null);
    }else{
        callback(null,{
            nombre:empleado.nombre,
            salario:salario.salario
        });
    }
}

getsalary(empleados[1],(err,salary)=>{
    if(err){
        console.log(err);
    }else{
        console.log(salary);    
    }
});