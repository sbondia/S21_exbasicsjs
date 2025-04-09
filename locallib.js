"use strict"
function htmlOutput(id, arrow, parameter=null){
    const aux = document.getElementById(`${id}`)
    aux.innerHTML += arrow+'<br>Output: '
    aux.innerHTML += arrow(parameter) || "Este sale por consola o no tiene salida"
}