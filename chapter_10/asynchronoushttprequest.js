console.log('sync one') // synchronous
console.log('sync two') // synchronous

const getTodos = (callback) => {
  console.log('async fired')
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    // DONE : 4, HEADERS_RECEIVED: 2, LOADING: 3, OPENED: 1, UNSENT: 0
    // console.log(request, request.readyState)
    console.log('readystatechange', request.readyState)
    if (request.readyState === 4 && request.status === 200) {
    //   console.log(request, request.responseText)
    //   callback(undefined, request.responseText)
      callback(undefined, JSON.parse(request.responseText))
    } else if (request.readyState === 4) {
    //   console.log('could not fetch the data')
      callback(new Error('could not fetch the data'), undefined)
    }
  })

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
  //   request.open('GET', 'todos.json')
  request.send()
}

// asynchronous
getTodos((error, data) => {
  console.log('callback fired')
  if (error) {
    console.log(error)
  } else {
    console.log(data)
  }
})
console.log('sync three') // synchronous
console.log('sync four') // // synchronous
