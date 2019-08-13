'use strict';

// Задание 2
// Напиши функцию countProps(obj),
// считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.


// ----- VARIATION 1 -----
const countProps = (obj) => {
  let counter = 0;
  for (var key in obj) {
    counter++;
  }
  return `Всего свойств: ${counter}`;
}
// Вызовы функции для проверки работоспособности твоей реализации.
console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


// ----- VARIATION 2 -----
const countProps2 = (obj) => {
  return Object.keys(obj).length
}
// Вызовы функции для проверки работоспособности твоей реализации 2.
console.log(countProps2({})); // 0
console.log(countProps2({ name: 'Mango', age: 2 })); // 2
console.log(countProps2({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3