
console.log('Line one')
console.log('Line two')

// asynchronous
setTimeout(() => {
  console.log('callback function fired')
}, 2000)
console.log('Line three')
console.log('Line four')
