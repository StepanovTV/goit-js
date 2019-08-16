'use strict';

// Задание 4
// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную
//  строку (в строке будут только слова и пробелы)
//   и возвращает самое длинное слово в этой строке.




// const printSum = (summa)=> summa > 0 ? `Общая сумма чисел равна [${summa}]` : 'вы не ввели не одного числа';
// Fri Aug 16, 2019 at 9:18 am
// Profile picture for Gennadiy Gorbulin
// Gennadiy Gorbulin
// В целом ок.
// Но надо лаконичнее.
// Приходится запоминать лишние переменные, чтобы понять код.
// Вот примеры как сделать запись короче и понятнее

// const calculateEngravingPrice = (message, pricePerWord) => message.split(' ').length * pricePerWord;

// const formatString = string => string.length < 40 ? string : `${string.slice(0, 41)}...`;
// Fri Aug 16, 2019 at 9:21 am

const findLongestWord = function findLongestWord(string) {
  const arrayString = string.split(' ');

  let longestWordLengh = arrayString[0];

  for (let i = 1; i < arrayString.length; i += 1) {
    if (longestWordLengh.length < arrayString[i].length) {
      longestWordLengh = arrayString[i];
    }
  }
  return longestWordLengh;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
