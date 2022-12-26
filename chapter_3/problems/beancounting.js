/** @format */

function countBs(inputStr) {
	let str = String(inputStr);

	let i = 0,
		count = 0;

	while (i < str.length) {
		if (str.charAt(i) === 'B') {
			count++;
		}
		i++;
	}

	return count;
}
console.log(countBs('BBCBBBB'));

function countChar(inputStr, matchChar) {
	let str = String(inputStr);
	let i = 0,
		count = 0;

	// while (i < str.length) {
	// 	if (str.charAt(i) === matchChar) {
	// 		count++;
	// 	}
	// 	i++;
	// }
	for (let i = 0; i < str.length; i++) {
		if (str[i] == matchChar) {
			count += 1;
		}
	}

	return count;
}
console.log(countChar('kakkervvvvvlak', 'v'));
