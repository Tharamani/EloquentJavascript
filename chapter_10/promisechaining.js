// a promise is an object that encapsulates the result of an asynchronous operation.
// A promise object has a state that can be one of the following:

// Pending => indicates asynchronous operation is in progress
// Fulfilled with a value =>  indicates that the asynchronous operation was completed successfully
// Rejected for a reason => indicates that the asynchronous operation failed.

const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    // async call
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', () => {
      // DONE : 4, HEADERS_RECEIVED: 2, LOADING: 3, OPENED: 1, UNSENT: 0
      console.log('readystatechange', request.readyState)
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText))
      } else if (request.readyState === 4) {
        reject(new Error('could not fetch the data'))
      }
    })

    request.open('GET', resource)
    request.send()
  })
}

getTodos('todos/luigi.json').then(data => {
  console.log('Promise luigi resolved : ', data)
  return getTodos('todos/marys.json')
}).then(data => {
  console.log('Promise mary resolved : ', data)
  return getTodos('todos/john.json')
}).then(data => {
  console.log('Promise john resolved : ', data)
}).catch(error => {
  console.log('Promise rejected : ', error)
})
