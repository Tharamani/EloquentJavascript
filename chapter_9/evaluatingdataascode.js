const x = 1
function evalAndReturnX (code) {
  console.log('code', code)
  eval(code)
  return x
}

console.log(evalAndReturnX('var x = 2')) // 2
console.log(x) // 1

//
const plusOne = Function('n', 'return n + 1;')
console.log(plusOne(4))
