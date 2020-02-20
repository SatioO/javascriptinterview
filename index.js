// Prototype Chaining
function Animal() {
  this.name = "Nothing"
}

Animal.prototype.getName = function() {
  return this.name
}

function Cat(name) {
  this.voice = name
  Animal.call(this)
}

Cat.prototype = Object.create(Animal.prototype)

Cat.prototype.getVoice = function() {
  return this.voice
}

class Human {
  constructor() {}
}


console.log(Cat.prototype)

const cat = new Cat("Meow")
console.log(cat.name)

const human = new Human()
console.log(human)

// Functional Chaining
const obj = {
  values: [1,2,3,4,5],
  filter: function(x) {
    this.values = x.filter(item => item %2 ===0)
    return this
  },
  add: function() {
    return this
  }
}

// Currying
function curry(fn) {
  return function curried(...args) {
    if(args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...args1) => {
        return curried(...args, ...args1)
      }
    }
  }
}

const add = (a, b) => a + b

const curried = curry(add)
console.log(curried(10)(20))


// Pure Functions
let a = 10

function impureAdd(b) {
  return a + b
}

console.log(impureAdd(10))

const mul = x => x * x
const div = x => x / 2

console.log(mul(div(2)))

// Pass by value / Pass by reference
function getData(a) {
  a = { name: "Ronak"}
  return null
}
const b = { name: "Vaibhav"}
getData(b)

console.log(b)