'use strict'
function Person (name) {
  console.log('this', this) // without new kw and without-strict mode, this refers to global object(window obj)
  this.name = name // with new kw in strict-mode, cannot set properties of undefined (setting 'name')
}
// const ferdinand = new Person('Ferdinand') // with new kw
const ferdinand = Person('Name is Ferdinand')
console.log(ferdinand) // undefined, as new kw is not being used
console.log(name) // creates name binding in global, without new kw
