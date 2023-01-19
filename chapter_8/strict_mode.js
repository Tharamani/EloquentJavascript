function canYouSpotTheProblem () {
  'use strict' // ReferenceError: counter is not defined
  for (counter = 0; counter < 10; counter++) {
    console.log('Happy happy')
  }
}
// canYouSpotTheProblem()

function foo () {
  // this.name = 'abc'
  console.log('this', this)
  return this
}
console.log(foo())
