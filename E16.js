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

//E164
const obj164 = {nom: 'Ona', edat: 25, ciutat: 'Barcelona'}
//for(let atr in obj164) {console.log(`${atr}: ${obj164[atr]}`)}
outputConsole("E164", obj164)

//E165
for(let num of array163){
    console.log(num)
    if(num==5) {break}
}
outputConsole("E165", array163)

//E166
for(let nom of noms161){
    let index = noms161.indexOf(nom)
    console.log(`${index}: ${nom}`)
}
outputConsole("E166", noms161)
