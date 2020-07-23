"use strict";

//--------------------01
// let index = 1;
// const logItems = function (array) {
//     
//     for (const item of array) {
//         console.log(`${index} - ${item}`)
//         index += 1;
//     }
// }
// logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//--------------------02

// const calculateEngravingPrice = function (message, pricePerWord) {
//     return message.split(" ").length * pricePerWord;
// }

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         10,
//     ),
// ); // 80

// console.log(
//     calculateEngravingPrice(
//         'Proin sociis natoque et magnis parturient montes mus',
//         20,
//     ),
// ); // 160

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//     calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

//-----------------03

// const findLongestWord = function (string) {
//   let words = string.split(" ");
//   let max = 0;
//   let longestWord;

//   for (const word of words) {
//     let len = word.length;
//     if (len > max) {
//       max = len;
//       longestWord = word;
//     }
//   }

//   return longestWord;
// };
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
// console.log(findLongestWord("Google do a roll")); // 'Google'
// console.log(findLongestWord("May the force be with you")); // 'force'

//--------------------04

// const formatString = string => string.length > 40 ? `${string.slice(0, 41)}...` : string;

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//     formatString(
//         'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//     ),
// );
// // вернется форматированная строка

//------------------------05

// const checkForSpam = function (message) {
//     let messageForCheck = message.toLowerCase();
//     return messageForCheck.includes("spam") || messageForCheck.includes("sale");
// };

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

//------------------------06

// let input;
// const numbers = [];
// let total = 0;

// do {
//     input = prompt("Введите номер:");
//     numbers.push(Number(input));
// } while (input !== null);

// if (numbers.length > 0) {
//     for (const number of numbers) {
//         total += number;
//     }   
//     console.log(`Общая сумма чисел равна ${total}`);
// }

//------------------------07

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = function (login) {
//      let loginLength = login.length;
//     return loginLength >= 4 && loginLength <= 16;
//     }

// function isLoginUnique(allLogins, login) {
//     return !allLogins.includes(login);
// }

// function addLogin(allLogins, login) {
//     if (!isLoginValid(login)) {
//         return "Ошибка! Логин должен быть от 4 до 16 символов";
//     } else if (!isLoginUnique(allLogins, login)) {
//         return "Такой логин уже используется!";
//     } else {
//         logins.push(login);
//         return "Логин успешно добавлен!";
//     }
// }
// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
// console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
