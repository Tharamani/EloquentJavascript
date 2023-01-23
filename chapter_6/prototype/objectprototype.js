/** @format */

console.log(typeof Object) // 'function'

console.log(Object.prototype)
console.log(Object.prototype.constructor)

console.log(Object.prototype.constructor === Object) // true

// define a constructor function called Person
function Person (name) {
  this.name = name
}

console.log(Person) //
console.log(Person.prototype) // {}

Person.prototype.greet = function () {
  return "Hi, I'm " + this.name + '!'
}

// create a new instance of the Person
const p1 = new Person('John')

const greeting = p1.greet()
console.log(greeting)

const s = p1.toString()
console.log(s) // toString() from Object.prototype

const p2 = new Person('Jane')

p2.draw = function () {
  return 'I can draw.'
}
console.log(p2.draw())

console.log(p1.greet())

p1.greet = function () {
  console.log('Hello')
}
console.log(p1.greet()) // executes ferom p1 object
