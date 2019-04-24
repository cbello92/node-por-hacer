const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    demand: true,
    alias: 'c',
    default: true
};

const argv = require('yargs')
        .command('crear', 'Crea una tarea por hacer', {
            descripcion
        })
        .command('listar', 'listar tareas', {
            
        })
        .command('actualizar', 'Actualiza una tarea por hacer', {
            descripcion,
            completado
        })
        .command('borrar', 'Borrar tarea', {
            descripcion
        })
        .help()
        .argv;

module.exports =  {
    argv
}