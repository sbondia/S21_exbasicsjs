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
        const errLine = errNoFunc.stack.split('\n')
        const errAt = errLine[1].replace("@http://127.0.0.1:5500/","")
        const err = errAt.split(':')
        console.log(`\n-----------------------
            \nEjercicio: ${id}
            \nSalida: ${func}
            \n## Este ejercicio no es una funcion, el desarrollo esta en el archivo: ${err[0]}, linea: ${err[1]} ##
        `)
    }
}