const createCounter = () => {
  let counter = 0;

  return () => {
    counter++;
    return counter;
  };
};

const counterFn = createCounter();

setInterval(() => {
  console.log(counterFn());
}, 1000);
