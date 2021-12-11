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

console.log(Person.prototype);

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

// Person.prototype IS NOT the prototype of Person. it is essentailly the same prototype as the created objects (that will be created using the prototype of the constructor function). Think of the prototype keyword as saying (.prototypeOfLinkedObjects). refer to below:
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); // true

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));

// when an object is created with a constructor function or ES6 classes:

// 1. an empty object is created instantly ({}).
// 2. (this) keyword in constructor function call is set to the new object. (this = {})
// 3. new {} is linked to the constructor functions prototype.
// 4. the new {} is always returned unless you explicitly stated otherwise.
