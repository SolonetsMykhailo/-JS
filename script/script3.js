const ADMIN_PASSWORD = "jqueryismyjam";
let message;
const userInput = prompt("HASLO:");
if (userInput === null){
    message = "Скасовано користувачем";
}
else if (userInput === ADMIN_PASSWORD){
    message = "Ласкаво просимо!";
}
else {
    message = "Доступ заборонений, невіриний пароль";
}
alert(message);