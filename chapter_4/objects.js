/** @format */

//Objects = > {list of properties separated by commas}
let day1 = {
	squirrel: false,
	events: ['work', 'touched tree', 'pizza', 'running'],
};
console.log(day1.squirrel); // → false

// Reading a property that doesn’t exist will give you the value undefined.
console.log(day1.wolf); // → undefined

// assign a value to a property expression with the = operator. This will replace the property’s value if it already existed

day1.squirrel = true;
console.log(day1.squirrel); // → true

// or create a new property on the object
day1.wolf = false;
console.log(day1.wolf); // → false
