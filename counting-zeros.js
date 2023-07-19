const counter = (num) => {
  let counter = 0;
  for (let i = 1; i <= num; i++) {
    counter += (i + "")?.match(/[0]/g)?.length || 0;
  }
  return counter
};

console.log(counter(1000));
