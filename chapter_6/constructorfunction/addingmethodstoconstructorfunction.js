/** @format */

function Person (firstName, lastName) {
  this.firstName = firstName
	this.lastName = lastName

	this.getFullName = function () {
    return this.firstName + ' ' + this.lastName
	};
  console.log(new.target) // [Function: Person] function reference
}
const person = new Person('John', 'Doe');
console.log(person.getFullName())
