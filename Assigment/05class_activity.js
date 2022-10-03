//Program to convert minutes to seconds

const prompt = require('prompt-sync')()
var getMinutes = prompt("Please enter how many minutes you want to convert:", "Type here")

function convert(minutes) {
    return minutes*60
}

calculateMinutes = convert(getMinutes)
console.log (`${getMinutes} minutes equals to: ${calculateMinutes} seconds`)