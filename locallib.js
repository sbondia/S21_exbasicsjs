"use strict"
function outputConsoleTitle(id){
    console.log(`
        #############
        APARTADO ${id}:
        #############`)
}
function outputConsole(id, func, para = null){
    console.log(`
        \n-----------------------
        \nEjercicio: ${id}
        \nFuncion: ${func}
        \nSalida: ${func(para)}
    `)
}