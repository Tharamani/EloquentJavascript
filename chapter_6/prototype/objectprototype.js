/** @format */

// JavaScript has the built-in Object() function.
console.log(typeof Object); // 'function'
// Note that Object() is a function, not an object.

// JavaScript provides an anonymous object that can be referenced via the prototype property of the Object() function:
console.log(Object.prototype); // anonymous object {constructor(), toString(), valueOf()....}
console.log(Object.prototype.constructor); // Object
// The Object.prototype also has an important property called constructor that references the Object() function
console.log(Object.prototype.constructor === Object); // true

// define a constructor function called Person
function Person(name) {
	this.name = name;
}
// like Object() function, the Person() function has a property called prototype that references an anonymous object
// anonymous object has the constructor property that references the Person() function.
console.log(Person); //
console.log(Person.prototype); //{}

// prototype linkage  // prototype linkage is denoted by [[Prototype]]
// JavaScript links the Person.prototype object to the Object.prototype object via the [[Prototype]], which is known as a prototype linkage.

// Defining methods in the JavaScript prototype object
// define greet() in the Person.prototype object:
Person.prototype.greet = function () {
	return "Hi, I'm " + this.name + '!';
};

// create a new instance of the Person
let p1 = new Person('John');

// JavaScript engine creates a new object named p1 and links the p1 object to the Person.prototype object via the prototype linkage:
// The link between p1, Person.prototype, and Object.protoype is called a prototype chain.
// call the greet() method on the p1 object
let greeting = p1.greet();
console.log(greeting);
// p1 doesn’t have the greet() method,

let s = p1.toString();
console.log(s); // toString() from Object.prototype

// call a method that doesn’t exist on the Person.prototype and Object.prototype object
// p1.fly(); // TypeError: p1.fly is not a function

// create another instance of the Person
let p2 = new Person('Jane');
// p2 object has the properties and methods as the p1 object.
// when you define a method on the prototype object, this method is shared by all instances.
// ===================
p2.draw = function () {
	return 'I can draw.';
};
console.log(p2.draw());
// console.log(p1.draw()); // TypeError: p1.draw is not a function

// Shadowing
// greet() from Person.prototype has greet() and executes from there
console.log(p1.greet());

//Add greet() in p1 object
p1.greet = function () {
	console.log('Hello');
};
console.log(p1.greet()); // executes ferom p1 object

// The greet() method of the p1 object shadows the greet() method of the prototype object which the p1 object references.
