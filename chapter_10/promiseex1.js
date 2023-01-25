const getSomething = () => {
  console.log('getSomething')
  // return new promise
  return new Promise((resolve, reject) => {
    console.log('Promise')
    // fetch data
    resolve('some data')
    // reject(new Error('some error'))
  })
}
// getSomething().then(data => {
//   console.log('then data')
//   console.log(data)
// }, error => {
//   console.log('then error')
//   console.log(error)
// })

getSomething().then(data => {
  console.log('then data')
  console.log(data)
}).catch(error => {
  console.log('catch error')
  console.log(error)
})
