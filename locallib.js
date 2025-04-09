"use strict"
function htmlOutput(id, arrow){
    const aux = document.getElementById(`${id}`)
    aux.innerHTML += arrow+'<br>Output: '
    aux.innerHTML += arrow() || "Este sale por consola o no tiene salida"
}