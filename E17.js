"use strict"
outputConsoleTitle("E17")

//let myPromise = new Promise(funcion-codigolargo);
//myPromise.then(funcion-codigoenespera);
//setTimeout(()=> {resolve(console.log("Hola, món")), 2000}

//E171
const myPromise = new Promise((resolve)=> {
    setTimeout(()=>resolve("Hola, món"), 2000)
})

//E172
myPromise.then((salida)=> console.log(salida))