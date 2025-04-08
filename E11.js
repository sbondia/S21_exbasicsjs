"use strict"
const add = (a, b) => a + b;
htmlOutput("E111", add)
function htmlOutput(id, arrow){
    const aux = document.getElementById(`${id}`)
    aux.innerHTML = arrow
}