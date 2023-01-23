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

// Nesting many asynchronous functions inside callbacks
download(url1, function (url) {
  console.log(`Processing ${url}`)
  download(url2, function (url) {
    console.log(`Processing ${url}`)
    download(url3, function (url) {
      console.log(`Processing ${url}`)
    })
  })
})
