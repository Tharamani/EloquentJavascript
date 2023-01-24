console.log('sync one') // synchronous
console.log('sync two') // synchronous

const getTodos = (resource, callback) => {
  console.log('async fired')
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, JSON.parse(request.responseText))
    } else if (request.readyState === 4) {
      callback(new Error('could not fetch the data'), undefined)
    }
  })

  request.open('GET', resource)
  request.send()
}

// Nesting the request inside callback function => leads to messy and unmaintainable
getTodos('https://jsonplaceholder.typicode.com/todos/1', (error, data) => {
  // console.log('data: ', data)
  if (error) console.log(error)
  console.log(data)

  getTodos('https://jsonplaceholder.typicode.com/todos/2', (error, data) => {
    if (error) console.log(error)
    console.log(data)

    getTodos('https://jsonplaceholder.typicode.com/todos/3', (error, data) => {
      if (error) console.log(error)
      console.log(data)
    })
  })
})

console.log('sync three') // synchronous
console.log('sync four') // // synchronous
