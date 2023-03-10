/** @format */

let arrays = [[1, 2, 3], [4, 5], [6]];

let newArray = arrays.reduce((a, c) => {
	return a.concat(c);
});
console.log(newArray);

function loop(start, test, update, body) {
	for (let value = start; test(value); value = update(value)) {
		body(value);
	}
}
loop(
	3,
	n => n > 0,
	n => n - 1,
	console.log
);
