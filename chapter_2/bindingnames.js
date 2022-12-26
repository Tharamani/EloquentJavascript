/** @format */

//conventionsto follow while binding/variable name
//binding names with string'
let fName = 'AAdya';
console.log(fName); // valid

//Digits can be part of binding names
let catch22 = 'Hello'; // valid
console.log(catch22);

// variable name must not start with a digit
//let 123Name = 'Hello'; //An identifier or keyword cannot immediately follow a numeric literal
//console.log(123Name);

//A binding name may include dollar signs ($) or underscores (_) but no other punctuation or special characters.
let $a = '123';
console.log($a);
let a$ = '123';
console.log(a$);

let _a = '123';
console.log(_a);
let a_ = '123';
console.log(a_);
