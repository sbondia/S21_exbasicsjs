"use strict"

const add = (a, b) => a+b
htmlOutput("E111", add)


const randomNumber = () => Math.floor(Math.random()*100)
htmlOutput("E112", randomNumber)


class Person{
    constructor(){
    this.name = "name"
    }
    greet = () => console.log(`Hola, ${this.name}.`)
}
const person = new Person()
htmlOutput("E113", person.greet)


const sampleArray = [1, 2, 3]
function printNumbers(array){
    array.forEach((num) => {console.log(num)})
}
printNumbers(sampleArray)
htmlOutput("E114", printNumbers, sampleArray)


setTimeout(() => console.log("missatge"),3000);