/** @format */

// ways to create objects
// 1. object literal
let person = {
	firstName: 'John',
	lastName: 'Doe',
};
// 3 ways to add method
// 1. using function expression and assgn to object literal
// object.methodName = function () { }
// 2. define method inside object literal as a properties of that object(before es6)
// let person = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	greet: function () {},
// };
// 3.ES6
// let person = {
// 	firstName: 'John',
// 	lastName: 'Doe',
// 	greet() () {},
// };

// we need to create many similar objects like the person object.

// To do that, use a constructor function to define a custom type(template of an object) and the new operator to create multiple objects from this type.

// a constructor function is a regular function with the following convention:

// The name of a constructor function starts with a capital letter like Person, Document, etc.
// A constructor function should be called only with the new operator.
// defines a constructor function called Person:
// function Person(fn, ln) {
// 	this.fn = fn;
// 	this.ln = ln;
// }
// To create a new instance of the Person, use 'new' operator
// Basically, the new operator does the following:

// Create a new empty object and assign it to the this variable.
// Assign the arguments 'John' and 'Doe' to the firstName and lastName properties of the object.
// Return the this value.
function Person(firstName, lastName) {
	// this = {};

	// add properties to this
	this.firstName = firstName;
	this.lastName = lastName;

	// return this;
}
// the constructor function Person allows you to create multiple similar objects.
let person1 = new Person('Jane', 'Doe');
let person2 = new Person('James', 'Smith');
