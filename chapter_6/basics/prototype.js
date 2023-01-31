/** @format */

const person = { name: 'John' }
console.log(person)
console.log(person.name)
console.log(person.toString())

console.log(Object.getPrototypeOf({}) == Object.prototype) // true
// Object.getPrototypeOf returns the prototype of an object
console.log(Object.getPrototypeOf(Object.prototype)) // null
console.log(typeof Object) // function

console.log(Object.prototype)
console.log(Object.prototype.constructor === Object) // true
