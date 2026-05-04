const rls = require("readline-sync")
const chislo = rls.question("Число: ").split("")
const razdel = rls.question("Разделитель: ")
console.log(`${chislo.join(`${razdel}`)}`)