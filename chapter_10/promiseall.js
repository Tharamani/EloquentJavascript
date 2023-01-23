// The Promise.all() method accepts a list of promises and returns a new promsie that resolve to an array of results of the input promises if all the input promises resolved; or reject with an error of the first rejected promise.
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The first promise has resolved')
    resolve(10)
  }, 1 * 1000)
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The second promise has resolved')
    resolve(20)
  }, 2 * 1000)
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('The third promise has resolved')
    resolve(30)
  }, 3 * 1000)
})

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c)

  console.log(`Results: ${results}`)
  console.log(`Total: ${total}`)
})
