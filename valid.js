const rls = require("readline-sync")
const password = rls.question("Введите пароль: ").split("")
let length = false;
let number = false;
let letter = false;
let symbol = false;
const numbers = "123456789"
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const symbols = "!@#$%^&*"
if (password.length > 6 && password.length < 20) {
    length = true
}
for (let i = 0; i < password.length; i++) {
    if (numbers.includes(password[i])) {
        number = true
    }
    if (letters.includes(password[i])) {
        letter = true
    }
    if (symbols.includes(password[i])) {
        symbol = true
    }
}
if (length && number && letter && symbol) {
    console.log("Пароль надежный")
}
else {
    console.log("Пароль слабый")
}