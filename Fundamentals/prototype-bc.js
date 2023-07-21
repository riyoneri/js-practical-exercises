const Person = function (name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  this.printInfo = function () {
    console.log(`${this.name} is ${this.age}, and he is ${this.gender}`);
  };
};

const person1 = new Person("Lion", 32, "male");
const person2 = new Person("Lionel", 50, "male");

person1.printInfo();
person2.printInfo();
