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

console.log(Cat.prototype)

const cat = new Cat("Meow")
console.log(cat.name)