/** @format */
let myString = 'Bengaluru';
console.log(myString.length); //9

console.log(Math.max(1, 3, 2)); // 3
console.log(Math.max(-1, -3, -2)); // -1

let array1 = [2, 5, 6, 3, 8];
// spreads the elements from array1 = 2, 5, 6, 3, 8
console.log(...array1); // 2 5 6 3 8
console.log(Math.max(...array1)); // 8

// Returns NaN if any of the parameters is or is converted into NaN
console.log(Math.max([2, 5, 6, 3, 8])); // NaN
// Returns -Infinity if no parameters are provided.
console.log(Math.max()); // -Infinity

//all JavaScript values have properties, xceptions are null and undefined
// console.log(null.length);  // Cannot read properties of null

// two main ways to access properties in JavaScript . and [] notation
// word after the dot is the literal name of the property
// use . notation to acces object values
let obj = {
	x: 1,
};
console.log(obj.x); // 1

// expression between the brackets is evaluated to get the property name
// use [] notation to access each elements in an array
let arr = [88, 87, 56];
for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]); // 88 87 56
}
