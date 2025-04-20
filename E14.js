"use strict"
outputConsoleTitle("E14")

//E141
const array41 = [1, 2]
const array42 = [3, 4]
const array412 = [...array41, ...array42]
outputConsole("E141", array412)

//E142
function suma142(...nums){
    let aux = 0
    nums.forEach(num=> aux+=num)
    return aux
}
outputConsole("E142", suma142, num1, num2, num3, num4)

//E143
const obj1 = {atr1: 1, atr2: 2}
const obj2 = {...obj1}
obj2.atr1 = 11
outputConsole("E143", obj2)
//console.log(obj2)

//E144
const array44 = ["azul", "rojo", 1, 2, 3]
let [color1, color2, ...numeros] = array44
outputConsole("E144", array44)
//console.log(color1, color2, numeros)

//E145
const array45 = [1, 2, 3]
function spreadFunc(arg1, arg2, arg3){
    return arg1+arg2+arg3
}
outputConsole("E145", spreadFunc, ...array45)

//E146
const obj3 = {atr1: 1, atr2: 2}
const obj4 = {atr3: 3, atr4: 4}
const obj34 = {...obj3, ...obj4}
outputConsole("E146", obj34)
//console.log(obj34)