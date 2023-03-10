/** @format */

class Animal {
  constructor (name) {
    this.speed = 0
    this.name = name
  }

  run (speed) {
    this.speed = speed
    console.log(`${this.name} runs with speed ${this.speed}.`)
  }

  stop () {
    this.speed = 0
    console.log(`${this.name} stands still.`)
  }
}

const animal = new Animal('My animal')
console.log(animal.toString())

class Rabbit extends Animal {
  hide () {
    console.log(`${this.name} hides!`)
  }
}

const rabbit = new Rabbit('White Rabbit')

rabbit.run(5) // White Rabbit runs with speed 5.
rabbit.hide() // White Rabbit hides!
