/** @format */
// a static property is shared by all instances of a class.
// class Item {
// 	static count = 0;
// }
// console.log(Item.count); // 0

// // access the static property in a static method,
// class Item {
// 	static count = 0;
// 	static getCount() {
// 		return Item.count;
// 	}
// }
// console.log(Item.getCount()); // 0

// access a static property in a class constructor or instance method
// When you create a new instance of the Item class, the following statement increases the count static property by one
class Item {
	static count = 0;
	static getCount() {
		return Item.count;
	}
	constructor(name, quantity) {
		this.name = name;
		this.quantity = quantity;
		Item.count++;
	}
}

let pen = new Item('Pen', 5);
let notebook = new Item('notebook', 10);

console.log(Item.getCount()); // 2
