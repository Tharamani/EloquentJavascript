/** @format */

//empty object
let rabbit = {};

//add function/property called speak to rabbit object
rabbit.speak = function (line) {
	console.log(`The rabbit says ${line}`);
};

//call speak() using rabbit ref
rabbit.speak('Im live');

function speak(line) {
	// the binding called 'this' in its body automatically points at the object that it was called on.
	// think of this as an extra parameter that is passed in a different way
	console.log(`The ${this.type} rabbit says ${line}`);
}

// create 'whiteRabbit' object with properties and functions
let whiteRabbit = {
	type: 'white',
	speak,
};

// call method 'speak' using ref var whiteRabbit
whiteRabbit.speak(`Oh my ears and whiskers,  +
                  how late it's getting!`);
let hungryRabbit = {
	type: 'hungry',
	speak,
};
hungryRabbit.speak(`I could use a carrot right now.`);

// If you want to pass 'this' explicitly, use a function’s call method, which takes the 'this' value as its first argument and treats further arguments as normal parameters.
speak.call(whiteRabbit, 'Cold!!');
speak.call(hungryRabbit, 'Burp!!');

// Arrow functions are different—they do not bind their own this but can see the this binding of the scope around them.
function normalize() {
	console.log(this);
	console.log(this.coord.map(n => n / this.length));
}
normalize.call({coord: [0, 2, 3], length: 5});
