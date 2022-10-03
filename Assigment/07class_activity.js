// Program to calculate age in days

const prompt = require('prompt-sync')()
var year_born = prompt("Please enter your date of birth:", "Type here")
var d = new Date()
var n = d.getFullYear()
function getAge(birthYear){
	var currentDate = new Date()
    var currentYear = currentDate.getFullYear()
    age = currentYear - birthYear
    return age*365
}
calculatedAge = getAge(year_born)
console.log("Hello, " + "you are " + calculatedAge + " days old!")