function test (label, body) {
  if (!body()) console.log(`Failed: ${label}`)
  return body()
}

console.log('t1', test('convert Latin text to uppercase', () => {
  return 'hello'.toUpperCase() === 'HELLO'
}))
console.log('t2', test('convert Greek text to uppercase', () => {
  return 'Χαίρετε'.toUpperCase() === 'ΧΑΊΡΕΤΕ'
}))
console.log('t3', test("don't convert case-less characters", () => {
  return 'مرحبا'.toUpperCase() === 'مرحبا'
}))
