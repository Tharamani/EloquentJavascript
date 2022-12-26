/** @format */

// ES6 provides specific syntax for defining the getter and setter using the get and set keywords.
class Person {
	constructor(firstName) {
		this.firstName = firstName;
	}
	get name() {
		console.log('get name()');
		return this.firstName;
	}
	set name(newName) {
		console.log('set name()');
		newName = newName.trim();
		if (newName === '') {
			throw 'The name cannot be empty';
		}
		this.firstName = newName;
	}
}
let person = new Person('Jane Doe');
console.log(person);
//Get name() called
console.log(person.name);

//Set name
person.name = 'Jane Smith';
console.log(person.name);
