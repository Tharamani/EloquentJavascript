/** @format */

console.log(typeof Object) // 'function'

console.log(Object.prototype) // anonymous object {constructor(), toString(), valueOf()....}

console.log(Object.prototype.constructor) // Object
console.log(Object.prototype.constructor === Object) // true

function Person (name) {
  this.name = name
  // return {};
}
// let p1 = new Person('John');
// console.log('return empty', p1);

console.log(Person)
console.log(Person.prototype)

Person.prototype.greet = function () {
  return "Hi, I'm " + this.name + '!'
}

// let p1 = new Person('John');

const greeting = p1.greet()
console.log(greeting)

const s = p1.toString()
console.log(s) // toString() from Object.prototype

// p1.fly(); // TypeError: p1.fly is not a function

const p2 = new Person('Jane')

// ===================
p2.draw = function () {
  return 'I can draw.'
}
console.log(p2.draw())
// console.log(p1.draw()); // TypeError: p1.draw is not a function

// greet() from Person.prototype has greet() and executes from there
console.log(p1.greet())

// Add greet() in p1 object
p1.greet = function () {
  return 'Hello'
}
console.log(p1.greet()) // executes from p1 object

console.log(Object.getPrototypeOf(p1)) // { greet: [Function (anonymous)] }
console.log(Object.getPrototypeOf(p2)) // { greet: [Function (anonymous)] }
