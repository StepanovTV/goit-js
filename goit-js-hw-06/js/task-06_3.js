'use strict';

import users from './users.js';
// Задание 3
// Получить массив имен пользователей по полу (поле gender).

// eslint-disable-next-line no-debugger
const getUsersWithGender = (users, gender) => users.reduce((allNames, user) => {
  if (user.gender === gender) {
    allNames.push(user.name);
  }
  return allNames;
}, []);

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
