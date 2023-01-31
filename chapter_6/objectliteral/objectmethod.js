/** @format */

// Object literal
const person = {
  firstName: 'John',
  lastName: 'Doe'
}

// adding property function/method to object(defines behaviour of object person)
person.greet = function () {
  console.log('Hello')
}
// call method using object
// person.greet();

// Besides using a function expression, you can define a function
function greet () {
  console.log('Hello')
}
// and assign it to an object
person.greet = greet
// call greet method uisng object
person.greet()
