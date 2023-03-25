class Human {
  constructor(name) {
    this.name = name
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}`)
  }
}

class Developer extends Human {
  sayHi() {
    console.log(`Hi! My name is ${this.name}. I am a developer.`)
  }
}

class Designer extends Human {
  sayHi() {
    console.log(`Hi! My name is ${this.name}. I am a designer.`)
  }
}

const zell = new Human('Zell')
const vincy = new Developer('Vincy')
const tim = new Designer('Tim')

zell.sayHi() // Hi! My name is Zell.
vincy.sayHi() // Hi! My name is Vincy. I am a developer.
tim.sayHi() // Hi! My name is Tim. I am a designer.