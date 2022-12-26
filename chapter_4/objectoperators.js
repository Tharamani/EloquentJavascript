/** @format */

let anObject = {left: 1, right: 2};
console.log(anObject.left); //  1

// unary 'delete' operator
delete anObject.left;
console.log(anObject.left); //  undefined

// Binary 'in' operator applied to a string and an object
//  tells you whether that object has a property with that name
console.log('left' in anObject); //  false

console.log('right' in anObject); //  true

//setting a property to undefined => object still has the property
anObject.up = undefined;
console.log('up' in anObject); //  true

//property is no longer present and in will return false.
delete anObject.up;
console.log('up' in anObject); //  false

//  Object.keys function => find out properties an object has
console.log(Object.keys({x: 0, y: 0, z: 2})); //  ["x", "y", "z"]

// Object.assign function => copies all properties from one object into another.
let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA); //  {a: 1, b: 3, c: 4}

// Arrays ->  kind of object specialized for storing sequences of things.
// journal that Jacques keeps as an array of objects
let journal = [
	{events: ['work', 'touched tree', 'pizza', 'running', 'television'], squirrel: false},
	{events: ['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], squirrel: false},
	{events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'], squirrel: true},
];
// If you evaluate typeof [], it produces "object"
console.log(typeof []);

//  Arrays are octopuses with all their tentacles in a neat row, labeled with numbers.
console.log(journal);
