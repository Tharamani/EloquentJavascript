/** @format */

// useful for a function to accept any number of arguments
// unction is called, the rest parameter is bound to an array containing all further arguments
// ...number = 4, 1, 9, -2
function max(...numbers) {
	console.log('rest', ...numbers);
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}
console.log(max(4, 1, 9, -2)); // 9

// use a similar three-dot notation to call a function with an array of arguments.
let numbers = [5, 1, 7];
// This “spreads” out the array into the function call, passing its elements as separate arguments
//...number = 5, 1, 7
console.log('spread', ...numbers);
console.log(max(...numbers)); // 7
console.log(max(9, ...numbers)); // 9

// Square bracket array notation similarly allows the triple-dot operator to spread another array into the new array.
let words = ['never', 'fully'];
console.log(['will', ...words, 'understand']); // [ 'will', 'never', 'fully', 'understand' ]
