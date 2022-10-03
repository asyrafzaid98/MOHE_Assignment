//Program to calculate area of rectangle

const prompt = require('prompt-sync')()
var a = prompt("Please enter width of rectangle:", "Type here")
var b = prompt("Please enter height of rectangle:", "Type here")

function areaRectangle(a, b) {
    return (a * b);//The area of rectangle is: w*h
}
 
calcutaleArea = areaRectangle(a,b)
console.log (`Area of the rectangle are ${calcutaleArea}`)
