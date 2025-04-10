"use strict"
function htmlOutput(id, func, parameter=null){
    const aux = document.getElementById(`${id}`)
    let salida = ''
    salida += `${func}`+'<br>Output: '
    salida += func(parameter) || "Este sale por consola o no tiene salida"
    salida += "<br><br>"
    aux.innerHTML = salida
}