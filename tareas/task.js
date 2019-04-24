const fs = require('fs');

let tasks = [];

const cargarDB = () => {
    try {      
        tasks = require('../db/data.json');
    } catch (error) {
        tasks = [];
    }
    
};

const guardarDB = () => {
    let json = JSON.stringify(tasks);
    fs.writeFile(`./db/data.json`, json, (err) => {
        if (err) 
            console.log(err);
        else
            console.log(`La tarea ha sido guardada con éxito`);
    });  
};

const crear = (descripcion) => {

    cargarDB();

    let findTask = tasks.find(f => f.descripcion == descripcion);

    if(findTask) {
        console.log('La tarea ya existe en la BD');
        return;
    }

    let task = {
        descripcion,
        completado : false
    };

    tasks.push(task);
    guardarDB();
    return task;
};

const listar = () => {
    cargarDB();
    return tasks;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let task = tasks.find(t => t.descripcion == descripcion);

    if(task) {
        task.completado = completado
        guardarDB();
        return task;
    } else {
        //console.log('No se ha encontrado la tarea');
        return 'NO SE ENCONTRO LA TAREA';
    }



};

const borrar = (descripcion) => {
    cargarDB();
    let index = tasks.findIndex(t => t.descripcion == descripcion);
    let task;
    if(index > -1) {
        task = tasks[index];
        tasks.splice(index, 1);
        guardarDB();
        return task;
    } else {
        return 'NO SE ENCONTRO LA TAREA';
    }



};

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}