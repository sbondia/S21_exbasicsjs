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
        \nArgumentos: ${checkNull(para1)} | ${checkNull(para2)}
        \nSalida: ${func(para1, para2)}
    `)
}
function checkNull(variable){
    return (variable) ? variable : ''
}