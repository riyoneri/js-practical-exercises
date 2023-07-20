Object.prototype.printName = function () {
  return this.name;
};

const obj1 = {
  name: "Lion",
  age: 32,
};

const obj2 = {
  name: "Kenny",
  age: 12,
};

console.log(obj1.printName());
console.log(obj2.printName());