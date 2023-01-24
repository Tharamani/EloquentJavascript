const url = 'https://www.pakainfo.com/wp-content/uploads/2021/09/image-url-for-testing.jpg'
console.log('start of script')

function download (url, callback) {
  console.log('Start download function')
  // asynchronous function
  setTimeout(() => {
    console.log('Start of setTimeout function')
    console.log(`Downloading ${url} ...`)

    callback(url)
    console.log('End of setTimeout function')
  }, 5000)
  console.log('End of download function')
}

// process() is a callback
function process (picture) {
  console.log('Start of process function')
  console.log(`Processing ${picture}`)
  console.log('End of process function')
}

download(url, process)
console.log('End of script')
