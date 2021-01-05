const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
        //null;
    }
    //console.log(listadoPorHacer);
};

const guardarDB = () => {

    //return new Promise((resolve, reject) => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) /*reject(err);*/ throw new Error('No se pudo grabar en la Base de Datos', err);
        else //resolve(`data.json`);
            console.log('Tarea creada en la Base de Datos');
    });
    //});
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
};

const getListado = () => {

    cargarDB();

    return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion = descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else
        return false;
};

const borrar = (descripcion) => {

    cargarDB();

    let tareas = listadoPorHacer.filter(tarea => tarea.descripcion != descripcion);

    if (tareas.length !== listadoPorHacer.length) {
        listadoPorHacer = tareas;

        guardarDB();

        return true;
    } else
        return false;
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
    /*,
        guardarDB*/
};