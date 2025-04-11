"use strict"
outputConsoleTitle("E11")

//E111
const add = (a, b) => a+b
outputConsole("E111", add)

//E112
const randomNumber = () => Math.floor(Math.random()*100)
outputConsole("E112", randomNumber)

//E113
class Person{
    constructor(){
    this.name = "nombre"
    }
    greet = () => `Hola, ${this.name}.`
}
const person = new Person()
outputConsole("E113", person.greet)

//E114
const sampleArray = [1, 2, 3]
function printNumbers(array){
    let aux = ''
    array.forEach((num) => {aux = num+' '})
    return aux
}
outputConsole("E114", printNumbers, sampleArray)

//E115
outputConsole("E115", setTimeout, () => "3s",3000)