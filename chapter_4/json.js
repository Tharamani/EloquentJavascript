/** @format */

// If you want to save data in a file for later or send it to another computer over the network,
// What we can do is serialize the data. That means it is converted into a flat description. A popular serialization format is called JSON (pronounced “Jason”), which stands for JavaScript Object Notation
// It is widely used as a data storage and communication format on the Web, even in languages other than JavaScript.

// All property names have to be surrounded by double quotes, and only simple data expressions are allowed—no function calls, bindings, or anything that involves actual computation. Comments are not allowed in JSON.
let jsonEg = {
	squirrel: false,
	events: ['work', 'touched tree', 'pizza', 'running'],
};

// JavaScript gives us the functions JSON.stringify and JSON.parse to convert data to and from this format. The first takes a JavaScript value and returns a JSON-encoded string. The second takes such a string and converts it to the value it encodes.
let string = JSON.stringify({squirrel: false, events: ['weekend']});
console.log(string); //  {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events); //  ["weekend"]
