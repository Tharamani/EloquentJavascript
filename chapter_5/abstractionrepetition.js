/** @format */
// program to do something a given number of times
for (let i = 0; i < 10; i++) {
	console.log(i);
}
// write a function that calls console.log N times.
function repeatLog(n) {
	for (let i = 0; i < n; i++) {
		console.log(i);
	}
}
// we can pass our action as a function value
// functions are just values, we can pass our action as a function value.
function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}

repeat(3, console.log);

// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// We don’t have to pass a predefined function to repeat
let label = [];
repeat(5, i => {
	label.push(`Unit ${i + 1}`);
});
console.log(label);
