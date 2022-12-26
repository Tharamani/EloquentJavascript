/** @format */

// higher-order functions shine is data processing
// To process data, we’ll need some actual data

// Unicode  = assigns a number to each character
// characters are associated with a specific script
// 140 different scripts—81 are still in use today
let scriptUnicode = {
	name: 'Coptic',
	// ranges property contains an array of Unicode character ranges, each of which is a two-element array containing a lower bound and an upper bound.
	ranges: [
		[994, 1008],
		[11392, 11508],
		[11513, 11520],
	],
	direction: 'ltr',
	year: -200,
	living: false,
	link: 'https://en.wikipedia.org/wiki/Coptic_alphabet',
};
