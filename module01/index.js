"use strict";

// -------------01

// const name = "Генератор защитного поля";
// let price = 1000;
// const massage = `Выбран ` + name + `, цена за штуку ` + price + ` кредитов`;

// console.log(massage);

// const newPrice = 2000;
// const massageSecond = `Выбран ` + name + `, цена за штуку ` + newPrice + ` кредитов`;

// console.log(massageSecond);

// ----------------02

// const total = 100;
// const ordered = 50;

// let answer;

// if (total < ordered) {
//      answer = "На складе недостаточно товаров!";
// } else if (total > ordered) {
//     answer = "Заказ оформлен, с вами свяжется менеджер";

// }

// console.log(answer);

// ----------------03

// const ADMIN_PASSWORD = "jqueryismyjam";
// let message;
// const userInput = prompt("Введите пароль");

// if (userInput === null) {
//     message = "Отменено пользователем!";
// }   else if (userInput === ADMIN_PASSWORD) {
//      message = "Добро пожаловать!";
// }   else if (userInput !== ADMIN_PASSWORD) {
//     message = "Доступ запрещен, неверный пароль!";
// }
// alert(message);

// console.log(message);

// -----------------04

// const credits = 23580;
// const pricePerDroid = 3000;
// let message;
// let buyDroid = prompt("Сколько единиц товара?");
// const totalPrice = pricePerDroid * buyDroid;
// const balance = credits - totalPrice;

// if (buyDroid === null) {
//     message = "Отменено пользователем!";
// } else if (totalPrice > credits) {
//     message = "Недостаточно средств на счету!";
// } else if (totalPrice < credits) {
//     message = `Вы купили ${buyDroid} дроидов, на счету осталось ${balance} кредитов.`;
// }

// console.log(message);

//------------------05

// let cost;
// let country;
// let delivery = prompt("Введите страну.");
// let resdelivery = delivery.toLowerCase();
// switch (resdelivery) {
//   case (country = "китай"):
//     cost = 100;
//     break;

//   case (country = "чили"):
//     cost = 250;
//     break;

//   case (country = "австралия"):
//     cost = 170;
//     break;

//   case (country = "индия"):
//     cost = 80;
//     break;

//   case (country = "ямайка"):
//     cost = 120;
//     break;

//   default:
//     alert("В вашей стране доставка не доступна");
// }
// let message = `Доставка в ${country} будет стоить ${cost} кредитов`;

// console.log(message);

//-------------------06

// let total = 0;
// let input;

// do {
//   input = +prompt("Введите число");
//   total += input;
// } while (input);
// alert(`Общая сумма чисел равна ${total}`);

// console.log(total);
