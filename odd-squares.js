const oddSquares = (arr) => {
  return arr.reduce((oddArray, item) => {
    if (item % 2 !== 0) oddArray.push(Math.pow(item, 2));
    return oddArray;
  }, []);
};

console.log(oddSquares([10, 15, 20, 25, 30]));