"use strict"
outputConsoleTitle("E12")

//E121
const age = 27
function potConduir(age){
    return age>=18 ? "Pots conduir" : "No pots conduir"
}
outputConsole("E121", potConduir, age)