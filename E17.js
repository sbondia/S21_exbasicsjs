"use strict"
outputConsoleTitle("E17")

//let myPromise = new Promise(funcion-codigolargo);
//myPromise.then(funcion-codigoenespera);
//setTimeout(()=> {resolve(console.log("Hola, món")), 2000}

//E171
const myPromise = new Promise(resolve=> {
    setTimeout(()=>resolve(console.log("Hola, món")), 2000)
})