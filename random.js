const rls = require('readline-sync');
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let input = rls.question("Угадайте число от 1 до 50: ");
let pastTry;
let value = random(1, 50);
let trying = 2;
if (input == value) {
    console.log("Верно!")
}
else {
    if (value > input) {
            console.log("Нужно число побольше")
        }
        else {
            console.log("Нужно число поменьше")
        }
    pastTry = input
    const input1 = rls.question("Попробуй еще: ")
    if (input1 == value) {
        console.log("Верно!")
    }
    else {
        if (Math.abs(pastTry - value) > Math.abs(input1 - value)) {
            console.log("Число ближе к правильному")
        }
        else {
            console.log("Число дальше от правильного")
        }
        if (value > input1) {
            console.log("Нужно число побольше")
        }
        else {
            console.log("Нужно число поменьше")
        }
        pastTry = input1
        while (trying <= 7 || input1 != value) {
            const input2 = rls.question("Попробуй еще: ")
            if (input2 == value) {
                console.log("Верно!")
                break
            }
            else {
                if (Math.abs(pastTry - value) > Math.abs(input2 - value)) {
                    console.log("Число ближе к правильному")
                }
                else {
                    console.log("Число дальше от правильного")
                }
                if (value > input2) {
                    console.log("Нужно число побольше")
                }
                else {
                    console.log("Нужно число поменьше")
                }
                pastTry = input2
                trying++
            }
        }
    }
    
}