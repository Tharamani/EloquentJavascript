function numberToString (n, base = 10) {
  let result = ''; let sign = ''
  if (n < 0) {
    sign = '-'
    n = -n
  }
  do {
    result = String(n % base) + result
    console.log('do', n, base, result)

    // n /= base => produces error
    console.log('n / base', n / base)
    n = Math.floor(n / base) // fix
  } while (n > 0)
  console.log('while', sign, result)
  return sign + result
}

numberToString(13, 10)
// console.log(numberToString(13, 10))
