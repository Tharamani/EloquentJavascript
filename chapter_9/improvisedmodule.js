// module for going between day names and numbers
// Its interface consists of weekDay.name and weekDay.number, and it hides its local binding names inside the scope of a function expression that is immediately invoked.

const weekDay = (function () {
  const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday']
  return {
    name (number) { return names[number] },
    number (name) { return names.indexOf(name) }
  }
}())

console.log(weekDay.name(weekDay.number('Monday')))
