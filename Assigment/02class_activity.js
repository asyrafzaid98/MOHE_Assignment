//Programm all odd number till n

function oddNum(number) {
    for (let i = 1; i <= number; i++) {
       if (i % 2 != 0) {
        console.log(i)
       }
    }
}

oddNum(7)