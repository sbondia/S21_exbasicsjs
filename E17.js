"use strict"
outputConsoleTitle("E17")

//E171
const myPromise171 = new Promise((resolve)=> {
    setTimeout(()=>resolve("Hola, món - 171"), 2000)
})

//E172
myPromise171.then((salida)=> console.log(salida))

//E173
let input173 = 'hsola'
const myPromise173 = new Promise((resolve, reject)=> {
    input173 == 'hola' ? setTimeout(()=>resolve("Hola, món - 173"), 2000) : reject("Rebutjat")
})
myPromise173.then((salida)=> console.log(salida+" - 173"))
            .catch((salida)=> console.log(salida+" - 173"))

//E174
pause()
async function pause(){
    const promise174 = await myPromise171
    console.log(promise174+' -> 174')
}

//175
pause2()
async function pause2(){
    try{
        const promise174 = await myPromise173
        console.log(promise174+' -> 175')
    }
    catch(err){
        console.log(err+' -> 175')
    }
}

//176
const myPromise1761 = new Promise((resolve)=> {
    setTimeout(()=>resolve("resolve2s"), 2000)
})
const myPromise1762 = new Promise((resolve)=> {
    setTimeout(()=>resolve("resolve3s"), 3000)
})
Promise.all([myPromise1761, myPromise1762]).then(promise=> promise.forEach(msg=> console.log(msg)))
