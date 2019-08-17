'use strict';

class Hero {
  static randomProm = 'static properti';
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  changName(newName) {
    this.name = newName;
  }

  gainXp(amount) {
    console.log(`${this.name} gained ${amount} experience points`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor(name, xp, weapen) {
    super(name, xp);
    this.weapen = weapen;
  }
  attack() {
    console.log(`${this.name} attacks width ${this.weapen}`);
  }
}

class Berserk extends Warrior {
  constructor(name, xp, weapen, superBlow) {
    super(name, xp, weapen);
    this.superBlow = superBlow;
  }
  attack() {
    super.gainXp(90);
    console.log(`применивши суперудар ${this.superBlow}`);
  }
}

const Maestro = new Berserk('Maestro', 9000, 'sword', 'dobbleAttack');

console.log(Maestro);

Maestro.attack();
console.log(Maestro);


// // const Hero = function Hero(name, xp) {
// //   this.name = name;
// //   this.xp = xp;
// // };

// Hero.prototype.gainXp = function gainXp(amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function Warrior(name, xp, ) {
//   Hero.call(this, name, xp);
//   this.weapen = weapen;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;

// Warrior.prototype.attack = function attack() {
//   console.log(`${this.name} attacks width ${this.weapen}`);
// };

// const Bes = function Bes(name, xp, weapen, sss) {
//   Warrior.call(this, name, xp, weapen);
//   this.sss = sss;
// };

// Bes.prototype = Object.create(Warrior.prototype);
// Bes.prototype.constructor = Bes;

// const mango = new Bes('Taras', 10000, 'hilberd', 'ddd');

// console.log(mango);
