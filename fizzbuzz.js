const num = Number(process.argv[2]);
if (num < 1 || num > 100) {
    console.log("Введите корректное число")
}
else if (num % 3 == 0 && num % 5 == 0) {
    console.log("FizzBuzz")
}
else if (num % 3 == 0) {
    console.log("Fizz")
}
else if (num % 5 == 0) {
    console.log("Buzz")
}
else {
    console.log("Ничего")
}

// Для ввода числа необходимо написать в терминале "node fizzbuzz.js число"