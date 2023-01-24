// async await
const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todoss/')
  //   const response = await fetch('todos/luigi.json')
  if (response.status !== 200) {
    throw new Error('Cannot fetch data')
  }
  const data = await response.json()
  console.log(data)
  return data
}

getTodos()
  .then(data => console.log(data))
  .catch(error => console.log(error))
