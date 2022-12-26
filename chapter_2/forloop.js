/** @format */
// The part before the first semicolon initializes the loop by defining a binding.
// second part is the expression that checks whether the loop must continue
// final part updates the state of the loop after every iteration
for (let number = 0; number <= 12; number += 2) {
	console.log(number);
}

let result = 1;
for (let number = 0; number < 10; number++) {
	result *= 2;
}
console.log(result);

//Breaking out of the loop
// Having the looping condition produce false is not the only way a loop can finish. There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.

for (let number = 20; ; number++) {
	if (number % 7 === 0) {
		console.log(`Number greater than 20 and divisible by 7 : ${number}`);
		break;
	}
}
//Note : Using the remainder (%) operator is an easy way to test whether a number is divisible by another number.If it is, the remainder of their division is zero

// The for construct in the example does not have a part that checks for the end of the loop. This means that the loop will never stop unless the break statement inside is executed.

// continue keyword
// When continue is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.

for (let number = 19; number <= 25; number++) {
	if (number % 7 === 0) {
		console.log(`Number greater than 20 and divisible by 7 continue: ${number}`);
		break; // break the loop
	} else {
		console.log(`Number  before continue: ${number}`);
		continue; // break current iteration
		console.log(`Number  after continue: ${number}`);
	}
}

//Updating bindings succinctly
//  counter = counter + 1 , counter += 1, counter++
for (let number = 0; number <= 12; number += 2) {
	console.log(`Number Updating bindings  : ${number}`);
}
