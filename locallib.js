"use strict"
function outputConsoleTitle(id){
    console.log(`
        #############
        APARTADO ${id}:
        #############`)
}
function outputConsole(id, func, ...para){
    try{
        console.log(`\n-----------------------
            \nEjercicio: ${id}
            \nFuncion: ${func}
            \nArgumentos: ${para.map(arg=> " "+arg)}
            \nSalida: ${func(...para)}
        `)
    }catch(errNoFunc){
        const err = errAt(errNoFunc)
        console.log(`\n-----------------------
            \nEjercicio: ${id}
            \nSalida: ${func}
            \n## Este ejercicio no es una funcion, el desarrollo esta en el archivo: ${err[0]}, linea: ${err[1]} ##
        `)
    }
}
function errAt(err){
    const errLines = err.stack.split('\n')
    const errLine = errLines[1].replace("@http://127.0.0.1:5500/","")
    return errLine.split(':')
}