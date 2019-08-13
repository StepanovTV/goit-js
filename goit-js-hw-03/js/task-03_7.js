'use strict';

// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка.
// Есть объект account в котором
// необходимо реализовать методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    const newDepositTranzaktion = {};
    newDepositTranzaktion.id = this.newId();
    newDepositTranzaktion.type = Transaction.DEPOSIT;
    newDepositTranzaktion.amount = amount;
    if (this.addTransaction(newDepositTranzaktion)) {
      this.balance += amount;
      return true;
    }
    return false;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    const newWithdrawTranzaktion = {};
    newWithdrawTranzaktion.id = this.newId();
    newWithdrawTranzaktion.type = Transaction.WITHDRAW;
    newWithdrawTranzaktion.amount = amount;
    if (this.balance > amount) {
      if (this.addTransaction(newWithdrawTranzaktion)) {
        this.balance -= amount;
        return true;
      }
      return false;
    } else {
      console.log('Снятие такой суммы не возможно! Недостаточно средств!');
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    if (!(
        Object.entries(transaction).length === 0 
        &&
        transaction.constructor === Object
      )) {
      this.transactions.push(transaction);
      return true;
    }
    return false;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return false;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        sum += transaction.amount;
      }
    }
    return sum;
  },

  /*
   * Метод возвращает новый ID
   */
  newId() {
    return `id-${this.transactions.length + 1}`;
  },
};

// Вызовы для проверки работоспособности реализации.
account.deposit(9789);
account.withdraw(435);
account.deposit(678);
account.withdraw(2343);
account.deposit(5432);
account.withdraw(1232);
account.deposit(3321);
account.withdraw(56000);

console.log(account.getTransactionDetails('id-3'));
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.DEPOSIT));

console.log(account);
