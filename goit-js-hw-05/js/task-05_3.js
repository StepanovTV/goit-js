'use strict';

// Задание 3
// Напиши класс Storage, который будет создавать объекты
// для управления складом товаров.

// При вызове будет получать один аргумент - начальный массив товаров,
// и записывать его в свойство items.

// Добавь методы класса:

class Storage {
  constructor(items) {
    this.items = items;
  }

  // - возвращает массив текущих товаров
  getItems() {
    return this.items;
  }

  // - получает новый товар и добавляет его к текущим
  addItem(item) {
    this.items.push(item);
  }

  // - получет товар и, если он есть, удаляет его из текущих
  removeItem(item) {
    const position = this.items.indexOf(item);
    return ~position ? this.items.splice(position, 1) : false;
  }
}

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор']);

const items = storage.getItems();
console.log(items);
// [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.log(storage.items);
// [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.log(storage.items);
// [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
