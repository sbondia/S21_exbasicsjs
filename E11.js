"use strict"


const add = (a, b) => a+b
outputConsole("E111", add)

const randomNumber = () => Math.floor(Math.random()*100)
outputConsole("E112", randomNumber)

class Person{
    constructor(){
    this.name = "name"
    }
    greet = () => `Hola, ${this.name}.`
}
const person = new Person()
outputConsole("E113", person.greet)


const sampleArray = [1, 2, 3]
function printNumbers(array){
    let aux = ''
    array.forEach((num) => {aux = num+' '})
    return aux
}
outputConsole("E114", printNumbers, sampleArray)

outputConsole("E115", setTimeout, () => "3s",3000)