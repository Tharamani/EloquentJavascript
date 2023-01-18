function numberToString (n, base = 10) {
  let result = ''; let sign = ''
  if (n < 0) {
    sign = '-'
    n = -n
  }
  do {
    console.log('do', n, base, result)
    result = String(n % base) + result
    n /= base
  } while (n > 0)
  return sign + result
}
numberToString(13, 10)
// console.log(numberToString(13, 10))
