'use strict';

import users from './users.js';
// Задание 9
// Массив имен (поле name) людей, отсортированных
// в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => users
  .sort(
    (FriendsCountA, FriendsCountB) => FriendsCountA.friends.length - FriendsCountB.friends.length,
  )
  .map(users => users.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr',
// 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
