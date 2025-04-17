"use strict"
outputConsoleTitle("E13")

//E131
let nombre = 4
function callback(aux){
    return aux
}
function processar(nombre, callback){
    return callback(nombre)
}
outputConsole("E131", processar, nombre, callback)