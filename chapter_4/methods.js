/** @format */
// string and array values contain, a number of properties that hold function values
let doh = 'Doh';
console.log(typeof doh.toUpperCase); // → function

console.log(doh.toUpperCase()); // → DOH

//  two methods you can use to manipulate arrays:
let sequence = [1, 2, 3];
//  push method adds values to the end of an array
sequence.push(4);
sequence.push(5);
console.log(sequence); //  [1, 2, 3, 4, 5]

// pop method, removes the last value in the array and returning it
console.log(sequence.pop()); //  5
console.log(sequence); //  [1, 2, 3, 4]
