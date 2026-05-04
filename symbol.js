let rls = require('readline-sync');
const input = rls.question("Введите один символ: ");
const alphabet = "abcdefghijklmnopqrstuvwxyz"
if (input > 0 && input < 10) {
    console.log("Цифра")
}
else if (alphabet.includes(input)) {
    console.log("Буква")
}
else {
    console.log("Неизвестный символ")
}