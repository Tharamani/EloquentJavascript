/** @format */

const rabbit = {}

rabbit.speak = function (line) {
  console.log(`The rabbit says ${line}`)
}

rabbit.speak('Im live')

function speak (line) {
  console.log(`The ${this.type} rabbit says ${line}`)
}

const whiteRabbit = {
  type: 'white',
  speak
}

whiteRabbit.speak(`Oh my ears and whiskers,  +
                  how late it's getting!`)
const hungryRabbit = {
  type: 'hungry',
  speak
}
hungryRabbit.speak('I could use a carrot right now.')

speak.call(whiteRabbit, 'Cold!!')
speak.call(hungryRabbit, 'Burp!!')

function normalize () {
  console.log(this)
  console.log(this.coord.map(n => n / this.length))
}
normalize.call({ coord: [0, 2, 3], length: 5 })
