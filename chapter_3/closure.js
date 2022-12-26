/** @format */

function wrapValue(n) {
	let local = n;
	return () => local;
}
let wrap1 = wrapValue(2);
console.log(wrap1);
console.log(wrap1());

let wrap2 = wrapValue(4);
console.log(wrap2);
console.log(wrap2());

function multiplies(factor) {
	return number => number * factor;
}
let twice = multiplies(2);
console.log(twice);
console.log(twice(5));
