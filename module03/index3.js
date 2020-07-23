"use strict";

//------------------01

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = "happy";
// user.hobby = 'skydiving';
// user['premium'] = false;

// for (const key of Object.keys(user)) {
//     console.log(key + ': ' + user[key]);
// }

//-------------------02

// const countProps = function (obj) {
//     return Object.keys(obj).length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

//-----------------03

// const findBestEmployee = function (employees) {
//     let max = 0;
//     let bestEmployee;

//     for (const employee in employees) {
//         const numOfTasks = employees[employee];
//         if (numOfTasks > max) {
//             max = numOfTasks;
//             bestEmployee = employee;
//         }
//     }

//     return bestEmployee;
// }
// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence

// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango

// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

//-----------------04

// const countTotalSalary = function (employees) {
//     let total = 0;
//     for (const employee in employees) {
//         total += employees[employee];
//     }
//     return total;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     }),
// ); // 330

// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     }),
// ); // 400

//--------------------05

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//     const values = [];
//     for (const item of arr) {
//         let value = item[prop]
//         if (value != undefined) {
//             values.push(value);
//         }

//     }
//     return values;
// }
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

//------------------06

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//     let total = 0;
//     for (const item of allProdcuts) {
//         let name = item.name;
//         if (productName === name) {
//             total += item.price * item.quantity;
//         }
//     }
//     return total;
// };


// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800