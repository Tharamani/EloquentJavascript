/** @format */

// run a piece of code multiple times, This form of control flow is called a loop.

// First a “counter” binding is created to track the progress of the loop
// test expression that checks whether the counter has reached its end value.
// end of the loop body, the counter is updated to track progress.
let number = 0;
while (number <= 12) {
	console.log(number);
	number += 2;
}

//2 to power of 10
let counter = 0,
	result = 1;
while (counter < 10) {
	console.log(counter);
	result *= 2;
	counter++;
}
console.log(result);
