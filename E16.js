"use strict"
outputConsoleTitle("E16")

//E161
const noms161 = ['Anna', 'Bernat', 'Clara']
//noms161.forEach(nom=> console.log(nom))
outputConsole("E161", noms161)

//E162
//for(let nom of noms161) {console.log(nom)}
outputConsole("E162", noms161)

//E163
const array163 = [1, 2, 3, 4, 5, 6]
const array163_2 = array163.filter(num=> num%2==0)
outputConsole("E163", array163_2)