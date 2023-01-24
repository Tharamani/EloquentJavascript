// download three pictures and process them sequentially

function download (url, callback) {
  setTimeout(() => {
    console.log(`Downloading ${url} ...`)
    callback(url)
  }, 1000)
}

const url1 = 'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg'
const url2 = 'https://www.pakainfo.com/wp-content/uploads/2021/09/sample-image-url-for-testing-300x169.jpg'
const url3 = 'https://www.pakainfo.com/wp-content/uploads/2021/09/dummy-user-image-url.jpg'

// Nesting the request inside callback function
download(url1, (url) => {
  console.log(`Processing url1 : ${url}`)
  download(url2, (url) => {
    console.log(`Processing url2 : ${url}`)
    download(url3, (url) => {
      console.log(`Processing url3 : ${url}`)
    })
  })
})
