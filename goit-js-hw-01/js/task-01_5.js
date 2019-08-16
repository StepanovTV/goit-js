'use strict';

// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
// Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
//  Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение
//  'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// _______ ВАШ КОМЕНТАРИЙ ______
// Gennadiy Gorbulin
// task-01_5.js
// нет смысла в каждом case делать обработку строки

// Лучше присвоить переменной значение и затем один раз обработать результат.

// И при обработке результата стоит сделать название страны с большой буквы.
// Today at 12:58 am

const CHINA = 'Китай';
const CHILE = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
const deliveryPriceChina = 100;
const deliveryPriceChile = 250;
const deliveryPriceAustralia = 170;
const deliveryPriceIndia = 80;
const deliveryPriceJamaica = 120;

let userChoise = prompt('Название страны в которую необходима доставка:');
let message;

if (userChoise === null) {
  message = 'Отменено пользователем!';
} else {
  userChoise = userChoise[0].toUpperCase() + userChoise.slice(1).toLowerCase();

  switch (userChoise) {
    case CHILE:
      message = `Доставка в ${CHILE} будет стоить ${deliveryPriceChile} кредитов`;
      break;

    case CHINA:
      message = `Доставка в ${CHINA} будет стоить ${deliveryPriceChina} кредитов`;
      break;

    case AUSTRALIA:
      message = `Доставка в ${AUSTRALIA} будет стоить ${deliveryPriceAustralia} кредитов`;
      break;

    case INDIA:
      message = `Доставка в ${INDIA} будет стоить ${deliveryPriceIndia} кредитов`;
      break;

    case JAMAICA:
      message = `Доставка в ${INDIA} будет стоить ${deliveryPriceJamaica} кредитов`;
      break;

    default:
      message = 'В вашей стране доставка не доступна';
  }
}

console.log(message);
