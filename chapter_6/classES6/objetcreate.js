/** @format */

const coder = {
	isStudying: false,
	printIntroduction: function () {
		console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
	},
};
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();
