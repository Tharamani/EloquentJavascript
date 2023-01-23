
function download (url, callback) {
  // asynchronous function
  setTimeout(() => {
    console.log(`Downloading ${url} ...`)

    callback(url)
  }, 1000)
}

// process() is a callback
function process (picture) {
  console.log(`Processing ${picture}`)
}

const url = 'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg'
download(url, process)
