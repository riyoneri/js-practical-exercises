Array.prototype.myMap = function (callbackFn) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackFn(this[i], i, this));
  }
  return newArr;
};

Array.prototype.myFilter = function (callbackFn) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === callbackFn(this[i], i, this)) newArr.push(this[i]);
  }

  return newArr;
};

Array.prototype.myReduce = function (callbackFn, initialValue) {
  for (let i = 0; i < this.length; i++) {
    initialValue = callbackFn(this[i], i, this);
  }

  console.log(initialValue);
};

Array.prototype.myForEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i], i, this);
  }
};

const arr = [1, 2, 4, 5];

// console.log(arr.myForEach((item, index, arr) => console.log(item)));
