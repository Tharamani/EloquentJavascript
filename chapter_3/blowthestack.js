/** @format */

function chicken() {
	return egg();
}
function egg() {
	// return chicken();
	return 'blow the stack';
}
console.log(`${chicken()}`);
