'use strict';

// Задание 7
// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel,
// если массив не пустой, необходимо посчитать сумму всех элементов массива
//  и записать ее в переменную total. Используй цикл for или for...of.
//  После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.


const arraySumm = function arraySumm(arrayNambers) {
  let summa = 0;
  if (arrayNambers.length > 0) {
    for (const argument of arrayNambers) {
      summa += argument;
    }
  }
  return summa;
};

const getNumbers = function getNumbers() {
  const arrayNambers = [];
  let input;
  // eslint-disable-next-line no-debugger
  do {
    input = prompt('Введите число!');
    if (Number.isNaN(Number(input)) || input === '') {
      alert('Было введено не число, попробуйте еще раз');
    } else {
      arrayNambers.push(Number(input));
    }
  } while (input !== null);
  return arrayNambers;
};

const printSum = summa => (summa > 0 ? `Общая сумма чисел равна [${summa}]` : 'вы не ввели не одного числа');

const total = arraySumm(getNumbers());

console.log(printSum(total));
