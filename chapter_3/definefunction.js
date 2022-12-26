/** @format */

//Define functions

// A function is created with an expression that starts with the keyword function.
// Functions have a set of parameters (no, one and multiple params) and a body, which contains the statements that are to be executed when the function is called.

//function with one parameter
const square = function (x) {
	return x * x;
};
console.log(square); // [Function: square]
console.log(square(2)); // 4

//function with no parameter
// A return keyword without an expression after it will cause the function to return 'undefined'
const makeNoise = function () {
	console.log('Pling');
};
console.log(makeNoise); // [Function: makeNoise]
console.log(makeNoise()); // 'Pling' and 'undefined' as function is not returning any value

//function with multiple parameter
const power = function (base, exponent) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};
console.log(power(2, 2));
