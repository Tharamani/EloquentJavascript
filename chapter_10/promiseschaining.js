const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10)
  }, 3 * 100)
})

console.log('p', p) // p Promise { <pending> }

p.then((result) => {
  console.log(result)
  console.log('p then1', p) // 10
  return result * 2
}).then((result) => {
  console.log(result)
  console.log('p then2', p) // 10
  return result * 3
}).then((result) => {
  console.log(result)
  console.log('p then3', p) // 10
  return result * 4
})
console.log('p', p) // p Promise { <pending> }
// The way we call the then() methods like this is referred to as a promise chain.
