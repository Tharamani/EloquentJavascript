// Assertions are checks inside a program that verify that something is the way it is supposed to be
// firstElement is described as a function that should never be called on empty arrays,
function firstElement (array) {
  if (array.length === 0) {
    throw new Error('firstElement called with []')
  }
  return array[0]
}
console.log(firstElement([1, 2]))
// console.log(firstElement([]))
