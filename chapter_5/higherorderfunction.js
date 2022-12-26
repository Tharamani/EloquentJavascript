/** @format */

// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions

// Higher-order functions allow us to abstract over actions, not just values
// For example, we can have functions that create new functions.
function greaterThan(n) {
	return m => m > n;
}
let gretaerThan10 = greaterThan(10);
console.log(gretaerThan10);
console.log(gretaerThan10(11));

// we can have functions that change other functions.
function noisy(f) {
	console.log(f);
	// ƒ min() { [native code] }
	return (...args) => {
		console.log('calling with', args);
		let result = f(...args);
		console.log('called with f function with ', 'returned', args);
		return result;
	};
}
let returnedres = noisy(Math.min)(1, 2, 3);
console.log(returnedres);
// let returnedres = noisy(Math.min);
// console.log(returnedres(1, 2, 3));

// even write functions that provide new types of control flow.
function unless(test, then) {
	if (!test) then();
}

// repeat(3, n => {
// 	unless(n % 2 == 1, () => {
// 		console.log(n, 'is even');
// 	});
// });

// repeat(3, n => {
// 	unless(n % 2 == 1, () => {
// 		console.log(n, 'is even');
// 	});
// });

// built-in array method, forEach, that provides something like a for/of loop as a higher-order function.
['A', 'B'].forEach(l => console.log(l));
