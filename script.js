"use strict";

function Person(firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside of a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
}

const jonas = new Person("Jonas", 1991);
// console.log(jonas);

// when calling a function with the *new* keyword:
// 1. New {} is created
// 2. function is called, this = {};
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person("Matilda", 2017);
const jack = new Person("Jack", 1975);
// console.log(matilda, jack);

const jay = "jay";
// console.log(jonas instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// console.log(Person.prototype);

// jonas.calcAge();
// matilda.calcAge();
// jack.calcAge();

// Person.prototype IS NOT the prototype of Person. it is essentailly the same prototype as the created objects (that will be created using the prototype of the constructor function). Think of the prototype keyword as saying (.prototypeOfLinkedObjects). refer to below:
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype); // true

// Person.prototype.species = "Homo Sapiens";
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty("firstName"));
// console.log(jonas.hasOwnProperty("species"));

// when an object is created with a constructor function or ES6 classes:

// 1. an empty object is created instantly ({}).
// 2. (this) keyword in constructor function call is set to the new object. (this = {})
// 3. new {} is linked to the constructor functions prototype.
// 4. the new {} is always returned unless you explicitly stated otherwise.

// console.log(jonas.__proto__); // Person.prototype
// console.log(jonas.__proto__.__proto__); // Object.prototype
// console.log(jonas.__proto__.__proto__.__proto__); // null

// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 4, 5, 9, 8, 3, 5, 6]; // new Array === []
// console.log(arr.__proto__ === Array.prototype); // true
// console.log(arr.__proto__.__proto__);

// REMEMBER: (arr.__proto__) is an object. so it has a prototype. here: arr.__proto__.__proto__;

// DON'T DO THIS
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());
// console.log(arr);

// const h1 = document.querySelector("h1");
// console.dir(h1);
// console.dir((x) => x + 1);
// console.dir(Person.prototype);
// console.dir(jonas.__proto__);

// Coding Challenge #1

// function Car(make, speed) {
//   this.make = make;
//   this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };
// console.log(Car.prototype);

// let bMW = new Car("BMW", 120);
// let mercedes = new Car("Mercedes", 95);

// bMW.accelerate();
// mercedes.accelerate();

// bMW.break();
// mercedes.break();

// console.log(bMW, mercedes);

// CLASSES SECTION

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. classes are NOT Hoisted (cannot be used before declared)
// 2. classes are first-class citizens (can be passed into and returned from other functions)
// 3. classes are executed in strict mode
