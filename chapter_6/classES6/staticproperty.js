/** @format */
// class Item {
// 	static count = 0;
// }
// console.log(Item.count); // 0

// class Item {
// 	static count = 0;
// 	static getCount() {
// 		return Item.count;
// 	}
// }
// console.log(Item.getCount()); // 0

class Item {
  static count = 0
  static getCount () {
    return Item.count
  }

  constructor (name, quantity) {
    this.name = name
    this.quantity = quantity
    Item.count++
  }
}

const pen = new Item('Pen', 5)
const notebook = new Item('notebook', 10)

console.log(Item.getCount()) // 2
