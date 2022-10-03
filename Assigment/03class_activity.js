//Program print all even number till n

function evenNum(number) {
    for (let i = 1; i <= number; i++) {
       if (i % 3 != 0) {
        console.log(i)
       }
    }
}

evenNum(8)