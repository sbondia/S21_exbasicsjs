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