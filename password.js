const rls = require('readline-sync');
const password = "1234"
const try1 = rls.question("Введите пароль")
if (try1 === password) {
    console.log("Доступ разрешен")
}
else {
    const try2 = rls.question("Попробуйте еще раз")
    if (try2 === password) {
        console.log("Доступ разрешен")
    }
    else {
        const try3 = rls.question("Попробуйте еще раз")
        if (try3 === password) {
            console.log("Доступ разрешен")
        }
        else {
            console.log("Доступ запрещен")
        }
    }
}