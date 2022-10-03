//Program to calculate area of circle

const prompt = require('prompt-sync')()
var radius = prompt("Please enter radius of circle:", "Type here")

function circleArea(radius) {
    let area = Math.PI * (radius * radius)
    return (Math.round(area*100)/100)
}

calculateCircleArea = circleArea(radius)
console.log(`The area of the circle are ${calculateCircleArea}`)