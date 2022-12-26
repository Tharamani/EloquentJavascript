/** @format */

//block scope for let, var
let x = 10; // let in global scope
if (true) {
	let y = 20; // let in block scope
	var z = 30; // var in block scope
	console.log(x + y + z);
}
console.log(x + z);
// console.log(y); cannot access which is local to block

// multiple bindings have the same name
const halve = function (n) {
	return n / 2;
};
let n = 10;
console.log(halve(100)); // 50
console.log(n); // 10
