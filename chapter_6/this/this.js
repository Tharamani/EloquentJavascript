/** @format */

// methods need to access other properties of the object.
const person = {
  firstName: 'John',
  lastName: 'Doe',
  greet: function () {
    console.log('Hello, World!')
  },
  getFullName: function () {
    return this.firstName + ' ' + this.lastName
  }
}
console.log(person.getFullName())
