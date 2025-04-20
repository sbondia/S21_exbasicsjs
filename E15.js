"use strict"
outputConsoleTitle("E15")

//E151
const array151 = [1, 2, 3, 4]
const array151_2 = array151.map(num=> num*num)
outputConsole("E151", array151_2)

//E152
const array152 = [1, 2, 3, 4]
const array152_2 = array152.filter(num=> num%2==0)
outputConsole("E152", array152_2)

//E153
const array153 = [1, 10, 8, 11]
let found153 = array153.find(num=> num>10)
outputConsole("E153", found153)