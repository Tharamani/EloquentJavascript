/** @format */

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);

let output = '';
let n = 4;
for (let i = 1; i <= n; i++) {
	for (let j = 1; j <= i; j++) {
		output += '#';
	}
	output += '\n';
}
console.log(output);

//for (let line = '#'; line.length < 8; line += '#') console.log(line);
