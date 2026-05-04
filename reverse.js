const rls = require("readline-sync");
const input = rls.question("Введите число ").split("")
input.reverse()
console.log(input.join(""))