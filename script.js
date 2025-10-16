'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside a constructor function
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const kledi = new Person('Kledi', 1995);

console.log(kledi);

// 1. New {} empty object created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matea = new Person('matea', 2017);
const ben = new Person('ben', 2010);
console.log(matea, ben);

console.log(kledi instanceof Person);
