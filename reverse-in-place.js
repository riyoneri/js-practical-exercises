const reverse = (str) => {
  str = str.split(" ");
  let newArr = [];
  for (let sub of str) {
    if (sub.length > 1) {
      sub = sub.split("");
      for (let j = 0; j < sub.length / 2; j++) {
        let temp = sub[j];
        sub[j] = sub[sub.length - 1 - j];
        sub[sub.length - 1 - j] = temp;
      }
      newArr.push(sub.join(""));
    } else {
      newArr.push(sub);
    }
  }
  return newArr.join(" ");
};

console.log(reverse("I am the good boy"));
