/** @format */
// We defined square with only one parameter. Yet when we call it with three, the language doesn’t complain. It ignores the extra arguments and computes the square of the first one.
function square(x) {
	return x * x;
}
console.log(square(2, true, 'optional'));

function add(a, b) {
	console.log(b); // undefined
	if (undefined === b) return a;
	else return a + b; // 2 + undefined = NaN
}
console.log(add(2, 3));
console.log(add(2));
