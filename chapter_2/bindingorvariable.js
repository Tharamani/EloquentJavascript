/** @format */
// Binding or variable
let caught = 5 * 5;
console.log(caught);

//use binding as a expression
let ten = 10;
console.log(ten * ten);
console.log(ten); // 10

// assign new value to the existing binding(changing the value of a variable)
let mood = 'light';
console.log(mood);
mood = 'dark';
console.log(mood);

// eg:
let luigisDebt = 140;
console.log(luigisDebt);
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

//define a binding without giving it a value => undefined
let name;
console.log(name);

// A single let statement may define multiple bindings. The definitions must be separated by commas.
let one = 1,
	two = 2;
console.log(one + two);

// var and const can also be used to create bindings
var user = 'Adya';

// const binding => points at the same value for as long as it lives
const greeting = 'Hello';
console.log(greeting + ' ' + user);
