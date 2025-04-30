"use strict"
outputConsoleTitle("E17")

//let myPromise = new Promise(funcion-codigolargo);
//myPromise.then(funcion-codigoenespera);

//E171
const myPromise = new Promise((resolve)=> {
    setTimeout(()=>resolve("Hola, món"), 2000)
})

//E172
myPromise.then((salida)=> console.log(salida))

//E173
/*
const myPromise2 = new Promise((resolve,reject)=>{
    let x = false
    setTimeout(()=>{
        if(x){
            return  x1(console.log("Hola, món", x1, Promise, myPromise))
        }else{
            return x2(console.log("Hola, men", x2, Promise, myPromise))
        }
    },2000)
})
*/
let input = 'hoola'
const myPromise173 = new Promise((resolve, reject)=> {
    input == 'hola' ? setTimeout(()=>resolve("Hola, món"), 2000) : reject
})
myPromise173.then((salida)=> console.log(salida))