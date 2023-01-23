// callback function
function isOdd (number) {
  return number % 2 !== 0
}

// callback function
function isEven (number) {
  return number % 2 === 0
}

// higher-order function
function filter (numbers, fn) {
  const results = []
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number)
    }
  }
  return results
}

const numbers = [1, 2, 4, 7, 3, 5, 6]

// A callback can be an anonymous function, which is a function without a name
// In ES6, can use an arrow function as well
console.log(filter(numbers, isOdd)) // [ 1, 7, 3, 5 ]
console.log(filter(numbers, isEven)) // [ 2, 4, 6 ]
