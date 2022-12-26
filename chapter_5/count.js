/** @format */

let total = 0,
	count = 1;
while (count <= 10) {
	console.log('total', total);
	// console.log('count', count);
	total += count;
	count += 1;
}
console.log(total);

// easy way
// console.log(sum(range(1, 10)));
