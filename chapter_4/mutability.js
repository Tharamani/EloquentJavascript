/** @format */

// object values can be modified
let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

// compare objects with JavaScript’s == operator
// compares by identity: it will produce true only if both objects are precisely the same value
console.log(object1 === object2); //  true
// Comparing different objects will return false, There is no “deep” comparison, which compares objects by contents
console.log(object1 == object3); //  false

object1.value = 15;
console.log(object2.value); //  15
console.log(object3.value); //  10

// const binding to an object can itself not be changed and will continue to point at the same object
// const = cannot modify variable name
const scoreConst = {visitors: 0, home: 0};
scoreConst.visitors = 1; // This is okay
console.log('scoreConst', scoreConst);
// score = {visitors: 1, home: 1}; // This isn't allowed

// use a let binding to keep track of a changing number by changing the value the binding points at
let scoreLet = {visitors: 0, home: 0};
console.log('scoreLet', scoreLet);

scoreLet = {visitors: 1, home: 1};
console.log('scoreLet', scoreLet);
//  numbers, strings, and Booleans, are all immutable(it is impossible to change values of those types)
// =======================

// // Understanding JavaScript Pass-By-Value
// Pass-by-value of primitives values
function square(x) {
	x = x * x;
	return x;
}

let y = 10;
//  JavaScript copies y value to the x variable.
// function changes the x variable. However, it does not impact the value of the y variable because x and y are separate variables.
let result = square(y);

console.log(result); // 100
console.log(y); // 10 -- no change

// Pass-by-value of reference values
let person = {
	name: 'John',
	age: 25,
};

function increaseAge(obj) {
	obj.age += 1;
}

increaseAge(person);
console.log(person);
