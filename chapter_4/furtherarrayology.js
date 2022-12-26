/** @format */

// object-related concepts =  useful array methods.
// push and pop, which add and remove elements at the end of an array
// methods for adding and removing things at the start of an array are called unshift and shift.
let todoList = [];
function remember(task) {
	todoList.push(task);
}
function getTask() {
	// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
	return todoList.shift();
}
function rememberUrgently(task) {
	// Inserts new elements at the start of an array, and returns the new length of the array.
	todoList.unshift(task);
}
// That program manages a queue of tasks. You add tasks to the end of the queue by calling remember("groceries"), and when you’re ready to do something, you call getTask() to get (and remove) the front item from the queue. The rememberUrgently function also adds a task but adds it to the front instead of the back of the queue.

// To search for a specific value, arrays provide an indexOf method
console.log([1, 2, 3, 2, 1].indexOf(2)); // 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // 3

// slice, which takes start and end indices and returns an array that has only the elements between them.
console.log([0, 1, 2, 3, 4].slice(2, 4)); //[2,3]
// end index is not given, slice will take all of the elements after the start index
console.log([0, 1, 2, 3, 4].slice(2)); // [2,3,4]

// takes an array and an index, and it returns a new array that is a copy of the original array with the element at the given index removed.
function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(['a', 'b', 'c', 'd', 'e'], 2)); //  ["a", "b", "d", "e"]
