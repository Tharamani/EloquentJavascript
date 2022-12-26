/** @format */
//  objects can inherit features from one another via prototypes.
// Every object has its own property called prototype

// prototype itself is also another object, the prototype has its own prototype. This creates a something called prototype chain. The prototype chain ends when a prototype has null for its own prototype.
//  object has a property called prototype denoted by the [[Prototype]]:
let person = {name: 'John'};
console.log(person);
console.log(person.name);
console.log(person.toString());

// JavaScript has the built-in Object() function. The typeof operator returns 'function' if you pass the Object function to it. For example:
// The prototype itself is an object with its own properties:
console.log(Object.getPrototypeOf({}) == Object.prototype); // true
// Object.getPrototypeOf returns the prototype of an object
console.log(Object.getPrototypeOf(Object.prototype)); // null
console.log(typeof Object); // function
//Note : Please note that Object() is a function, not an object

// JavaScript provides an anonymous object that can be referenced via the prototype property of the Object() function:
console.log(Object.prototype);
// Object.prototype object has some useful properties and methods such as toString() and valueOf().

// Object.prototype also has an important property called constructor that references the Object() function.
console.log(Object.prototype.constructor === Object); // true
