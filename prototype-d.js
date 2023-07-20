const person = {
    name: 'Lion',
    age: 32,
    gender: 'male'
}

const person1 = Object.create(person)

console.log(person)

Object.prototype.printName = function (){
    console.log(this.name)
}

person1.printName()