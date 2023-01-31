/** @format */

// use the constructor function to initialize the properties:
function Person (firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}
// define the getFullName() method in the prototype object of the Person function
Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName
}
// create multiple instances of the Person type
const p1 = new Person('John', 'Doe')
const p2 = new Person('Jane', 'Doe')

console.log(p1.getFullName())
console.log(p2.getFullName())
