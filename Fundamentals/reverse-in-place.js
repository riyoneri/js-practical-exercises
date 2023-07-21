const reverse = (str) => {
  str = str.split(" ");
  let newArr = [];
  for (let sub of str) {
    newArr.push(sub.split("").reverse().join(""));
  }
  return newArr.join(" ");
};

console.log(reverse("I am the good boy"));
