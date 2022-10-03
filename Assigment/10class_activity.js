// program to generate fibonacci series up to n terms

const prompt = require('prompt-sync')()
const number = parseInt(prompt('Enter the number of terms: '));

let a = 0, b = 1, f;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(a);
    f = a + b;
    a = b;
    b = f;
    
}

