/** @format */

//lycanthropes means  the mythical transformation of a person into a wolf.
let journal = [];

// shorthand property name same as {events : events}
// {events}  value is taken from the binding with the same name.
function addEntry(events, squirrel) {
	journal.push({events, squirrel});
}
console.log(journal);

addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);

console.log(journal);
