/** @format */

// JavaScript allows to define methods of an object using the object literal syntax
let person = {
	firstName: 'John',
	lastName: 'Doe',

	//method inside object literal
	greet: function () {
		console.log(`Hello World!!`);
	},
};

//call greet method
person.greet();

// ES6 provides concise method syntax that allows to define a method for an object:
let person2 = {
	firstName: 'Jai',
	lastName: 'Dev',
	greet() {
		console.log(`Hello ${this.firstName}`);
	},
};
person2.greet();
