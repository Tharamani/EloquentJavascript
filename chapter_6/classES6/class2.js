/** @format */

// ES6 class syntax looks cleaner and less verbose
class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName () {
    return this.firstName + ' ' + this.lastName
  }
}

const p1 = new Person('John Doe')
const p2 = new Person('Jane', 'Doe')

console.log(p1.getFullName())
console.log(p2.getFullName())

console.log(typeof Person) // function
console.log(p1 instanceof Person) // true
console.log(p1 instanceof Object) // true
console.log(Object.getPrototypeOf(p1)) // {}
