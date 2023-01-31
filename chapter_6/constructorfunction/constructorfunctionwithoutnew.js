/** @format */

function Person (firstName, lastName) {
  this.firstName = firstName
	this.lastName = lastName

	this.getFullName = function () {
    return this.firstName + ' ' + this.lastName
	};
  console.log(new.target) // undefined
}
const person = Person('John', 'Doe');
// console.log(person.firstName); //TypeError: Cannot read properties of undefined (reading 'firstName')
