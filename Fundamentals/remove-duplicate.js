const remove = (arr) => {
  let newArr = [];
  for (let item of arr) {
    if (newArr.includes(item)) continue;
    newArr.push(item);
  }

  return newArr
};

console.log(
  remove([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2])
);