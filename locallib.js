"use strict"
function outputConsoleTitle(id){
    console.log(`
        #############
        APARTADO ${id}:
        #############`)
}
function outputConsole(id, func, para1 = null, para2 = null){
    console.log(`\n-----------------------
        \nEjercicio: ${id}
        \nFuncion: ${func}
        \nSalida: ${func(para1, para2)}
    `)
}