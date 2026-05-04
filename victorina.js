const rls = require('readline-sync');
let count = 0;
const try1 = rls.question("Столица Франции?")
if (try1 === "Париж") {
    count++
}
const try2 = rls.question("Сколько будет 2+2?")
if (try2 === "4") {
    count++
}
const try3 = rls.question("Какого цвета небо?")
if (try3 === "синего") {
    count++
}
console.log(`Вы набрали ${count} из 3 баллов`)

