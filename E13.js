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

//E132
let num3 = 25
let num4 = 85
function suma(num1, num2){
    return num1+num2
}
function calculadora(num1, num2, callback){
    return callback(num1, num2)
}
outputConsole("E132", calculadora, num3, num4, suma)

//E133
let nom = "David"
function funcNom(nom){
    return nom
}
function esperarISaludar(nom, func){
    setTimeout(()=> func(nom), 2000)
}
outputConsole("E133", esperarISaludar, nom, funcNom)