const argv = require('./config/yargs').argv;
const color = require('colors');
const task = require('./tareas/task');

let comando = argv._[0];

switch(comando) {
    case 'crear':
        let tarea = task.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
    let listado = task.listar();
        for (let t of listado) {
            console.log('=========== TAREAS ==========='.green);
            console.log(t.descripcion);
            console.log('Estado: ', t.completado);
            console.log('=============================='.green);
        }
    break;

    case 'actualizar':
        let t = task.actualizar(argv.descripcion, argv.completado);
        console.log(t);
    break;

    case 'borrar':
        let eliminar = task.borrar(argv.descripcion);
        console.log(eliminar);
    break;

    default:
        console.log("Comando no reconocido");
}