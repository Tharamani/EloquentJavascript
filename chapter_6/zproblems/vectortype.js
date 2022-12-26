/** @format */
// A vector type
// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point(x, y) from the origin(0, 0).

class Vec {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	plus(param) {
		let sumX = this.x + param.x;
		let sumY = this.y + param.y;
		return {x: sumX, y: sumY};
	}
	minus(param) {
		let difX = this.x - param.x;
		let difY = this.y - param.y;
		return {x: difX, y: difY};
	}
	get length() {
		return Math.abs(Math.sqrt(this.a) - Math.sqrt(this.b));
	}
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
