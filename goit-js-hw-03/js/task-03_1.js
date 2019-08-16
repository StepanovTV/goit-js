'use strict';

// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

let user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';// добавляет поле mood со значением 'happy'
user.hobby = 'javascript';// заменяет значение hobby на 'javascript'
user.premium = false;// заменяет значение premium на false

// выводит содержимое объекта user в формате
// ключ:значение используя Object.keys() и for...of
const userArr = Object.keys(user);

for (const properties of userArr) {
  console.log(`ключ - ${properties} : значение - ${user[properties]}`);
}
