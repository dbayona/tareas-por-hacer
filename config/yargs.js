const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const argv = require('yargs')
    .command('crear', 'Crear por hacer', opts)
    .command('actualizar', 'Actualizar una tarea por hacer', opts)
    .command('borrar', 'Borrar una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}