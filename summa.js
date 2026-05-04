const rls = require("readline-sync")
const input = rls.question("Введите число: ").split("")
let sum = 0;
for (let i = 0; i < input.length; i++) {
    sum += Number(input[i])
}
console.log(sum)