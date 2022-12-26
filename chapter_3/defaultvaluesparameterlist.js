/** @format */

//Assign default values in parameter list to avoid 'undefined' when arguments are few
function power(base, exponent = 10) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
}
console.log(power(2));
console.log(power(2, 6));
