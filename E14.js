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