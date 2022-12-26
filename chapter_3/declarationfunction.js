/** @format */

// way to create a function
// 1. function declararion - allows to call the function before declaring
console.log(square(2));

function square(x) {
	return x * x;
}

//function expressions - cannot call function before declaring
const cube = function (x) {
	return x * x * x;
};
console.log(cube(2));

//arrow functions - - cannot call function before declaring
const power = (base, exponent) => {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
};
console.log(power(2, 2));

// When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function.

const square1 = x => {
	return x * x;
};
console.log(square1(2));

//no paranthesis, no braces, return kw for single parameters and single statements
const square2 = x => x * x;
console.log(square2(2));

// When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.
const horn = () => {
	console.log('Empty parameter list');
};
console.log(horn());
