/** @format */

// This kind of loop is common in classical JavaScript
for (let i = 0; i < JOURNAL.length; i++) {
	let entry = JOURNAL[i];
	// Do something with entry
}

// There is a simpler way to write such loops in modern JavaScript.
for (let entry of JOURNAL) {
	console.log(`${entry.events.length} events.`);
}
// the word of after a variable definition, it will loop over the elements of the value given after of
