// setTimeout(() => {
//     console.log('hola mundo');
// }, 2000);

let getUserById = (id,callback)=>{
    let usuario = {
        nombre: 'jhon',
        id
    }
    callback(usuario)
}

getUserById(10,(usuario)=>{console.log(usuario);})