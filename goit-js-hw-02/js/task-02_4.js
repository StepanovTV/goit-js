'use strict';

// Задание 4
// Напиши фукцнию findLongestWord(string),
// которая принимает параметром произвольную
//  строку (в строке будут только слова и пробелы)
//   и возвращает самое длинное слово в этой строке.

// Вызовы функции для проверки работоспособности твоей реализации.

const findLongestWord = function(string) {
  const arrayString = string.split(' ');

  let longestWordLengh = arrayString[0];

  for (let i = 1; i < arrayString.length; i += 1) {
    if (longestWordLengh.length < arrayString[i].length) {
      longestWordLengh = arrayString[i];
      break;
    }
  }
  return longestWordLengh;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
