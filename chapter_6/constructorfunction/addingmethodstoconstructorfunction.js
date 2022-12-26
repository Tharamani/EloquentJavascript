/** @format */

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	this.getFullName = function () {
		return this.firstName + ' ' + this.lastName;
	};
	// constructor function is called with the new keyword, the new.target returns a reference of the function.
	console.log(new.target); // [Function: Person] function reference
}
// can create a new Person object and invoke the getFullName() method:
let person = new Person('John', 'Doe');
console.log(person.getFullName());
