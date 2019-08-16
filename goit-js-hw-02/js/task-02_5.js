'use strict';

// Задание 5
// Напиши функцию formatString(string)
// принимающую строку в параметр string.

// Если длина строки не превышает 40 символов,
// функция возвращает ее в исходном виде.
// Если длина больше 40 символов,
// то функция обрезает строку до 40-ка символов
// и добавляет в конец строки троеточие '...',
// после чего возвращает укороченную версию.

const formatString = string => (string.length < 40 ? string : `${string.slice(0, 41)}...`);

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'));
