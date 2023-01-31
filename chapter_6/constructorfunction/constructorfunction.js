/** @format */

const person = {
  firstName: 'John',
  lastName: 'Doe'
}

// let person = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	greet: function () {},
// };
// let person = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	greet() () {},
// };

// function Person(fn, ln) {
// 	this.fn = fn;
// 	this.ln = ln;
// }

function Person (firstName, lastName) {
  // this = {};

  // add properties to this
  this.firstName = firstName
  this.lastName = lastName

  // return this;
}
const person1 = new Person('Jane', 'Doe')
const person2 = new Person('James', 'Smith')
