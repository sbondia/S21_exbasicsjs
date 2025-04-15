"use strict"
outputConsoleTitle("E12")

//E121
let age = 27
function potConduir(age){
    return age>=18 ? "Pots conduir" : "No pots conduir"
}
outputConsole("E121", potConduir, age)

//E122
let num1 = 32
let num2 = 23
const comparadorNum = (num1, num2) => num1>num2 ? `${num1} es mes gran` : `${num2} es mes gran`
outputConsole("E122", comparadorNum, num1, num2)

//E124
const array2 = [2,55,66,1,413,98]
function parOImpar(array){
    let arrayAux = []
    for(let i=0; i<array.length; i++){
        arrayAux[i] = (array[i]%2==0) ? 'par' : 'impar'
    }
    return arrayAux
}
outputConsole("E124", parOImpar, array2)