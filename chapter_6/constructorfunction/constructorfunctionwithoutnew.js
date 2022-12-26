/** @format */

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	this.getFullName = function () {
		return this.firstName + ' ' + this.lastName;
	};
	console.log(new.target); // undefined
}
// without new kw, Person function in treated as normal function
// Hence "this" points to global object
let person = Person('John', 'Doe');
// console.log(person.firstName); //TypeError: Cannot read properties of undefined (reading 'firstName')
