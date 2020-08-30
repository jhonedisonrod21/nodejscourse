const {argv} = require('./config/commands');
const {crear,getlistado,update,remove} = require('./db/db');
let command = argv._[0];

switch(command){
    case "create":
        console.log(`crear una tarea ${argv.description}`);
        crear(argv.description);
    break;
    case "list":
        getlistado()
    break;
    case "check":
        console.log(argv.description + ''+argv.completed);
        update(argv.description,argv.completed);
        console.log(`marcar una tarea como hecha ${argv.description}  ${argv.completed}   `);
    break;
    case "remove":
        remove(argv.description);
    break;
    default:
        console.log(`"${command}" comando desconocido use node app --help para mas informacion`);
    break;
}