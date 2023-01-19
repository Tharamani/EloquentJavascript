// To use modFunction1 function in our main.js file
// const modFunction1 = require('./mod1.js')

const { modFunction1, modFunction2 } = require('./mod1.js')

const testFunction = () => {
  console.log('Im the main function')
  modFunction1()
  modFunction2()
}

testFunction()
