'use strict';
// Задание 2
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ['Монорельса', 'Фильтр'],

  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryOperation = function(itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction(itemName);
};

const boundInventoryAdd = inventory.add.bind(inventory);
invokeInventoryOperation('Аптечка', boundInventoryAdd);
// Invoking add opeartion on Аптечка
console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

const boundInventoryRemove = inventory.remove.bind(inventory);
invokeInventoryOperation('Фильтр', boundInventoryRemove);
// Invoking remove opeartion on Фильтр
console.log(inventory.items); // ['Монорельса', 'Аптечка']
