/** @format */

//ES6 class syntax looks cleaner and less verbose
// JavaScript class is a blueprint for creating objects
class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName() {
		return this.firstName + ' ' + this.lastName;
	}
}

let p1 = new Person('John Doe');
let p2 = new Person('Jane', 'Doe');

console.log(p1.getFullName());
console.log(p2.getFullName());

// To verify the fact that classes are special functions
console.log(typeof Person); // function
console.log(p1 instanceof Person); // true
console.log(p1 instanceof Object); // true
console.log(Object.getPrototypeOf(p1)); // {}
