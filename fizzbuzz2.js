const num = Number(process.argv[2]);
if (num < 1 || num > 100) {
    console.log("Введите корректное число")
}
else {
    for (let i = 0; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
            console.log("Buzz")
        }
        else {
            console.log("Ничего")
        }
    }
}