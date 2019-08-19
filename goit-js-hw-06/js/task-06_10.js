'use strict';

import users from './users.js';
// Задание 10
// Получить массив всех умений всех пользователей (поле skills),
//  при этом не должно быть повторяющихся умений и они должны
//  быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (users) => {
  const skillsArr = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);

    return allSkills;
  }, []);

  return skillsArr.filter((skill, iter, arrSkil) => arrSkil.indexOf(skill) === iter).sort();
};

console.log(getSortedUniqueSkills(users));
//  ["adipisicing", "amet", "anim", "commodo", "culpa", "elit", "ex",
//  "ipsum", "irure", "laborum", "lorem", "mollit", "non", "nostrud", "nulla",
//  "proident", "tempor", "velit", "veniam"]
