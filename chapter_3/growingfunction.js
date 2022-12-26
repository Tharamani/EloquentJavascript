/** @format */

function printFarmInventory(cows, chickens) {
	let cowsString = String(cows);

	while (cowsString.length < 3) {
		cowsString = '0' + cowsString;
	}
	console.log(`${cowsString} Cows`);

	let chickensString = String(chickens);
	while (chickensString.length < 3) {
		chickensString = '0' + chickensString;
	}
	console.log(`${chickensString} chickens`);
}
// printFarmInventory(7, 11);

//  better way
function printZeroPaddedWithLabel(number, label) {
	let numberString = String(number);
	while (numberString.length < 3) {
		numberString = '0' + numberString;
	}
	console.log(`${numberString} ${label}`);
}
function printFarmInventory(cows, chickens, pigs) {
	printZeroPaddedWithLabel(cows, 'Cows');
	printZeroPaddedWithLabel(chickens, 'Chickens');
	printZeroPaddedWithLabel(pigs, 'Pigs');
}
// printFarmInventory(7, 8, 9);

//Best approach
function zeroPad(number, width) {
	let numberString = String(number);
	while (numberString.length < width) {
		numberString = '0' + numberString;
	}
	return numberString;
}
function printFarmInventory(cows, chickens, pigs) {
	console.log(`${zeroPad(cows, 3)} Cows`);
	console.log(`${zeroPad(chickens, 3)} Chickens`);
	console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 8, 9);
