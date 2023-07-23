const number = document.querySelector('[type="number"]');
const btn = document.querySelector("button");
const errorSpan = document.querySelector(".error");

const handleOutput = (checker, msg) => {
  // btn.textContent = checker ? "It's circular prime" : "It's not circular prime";
  // btn.disabled = true;

  // const timer = setTimeout(() => {
  //   btn.textContent = "Check Prime";
  //   btn.disabled = false;
  //   clearTimeout(timer);
  // }, 3000);

  errorSpan.classList.remove("hidden");
  errorSpan.textContent = msg;
  if (checker) {
    errorSpan.classList.replace("text-red-600", "text-green-500");
  }
};

const checkPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
};

const checkEquality = (num1, num2) => {
  num1 = num1.split("");
  num2 = num2 + "";

  for (let item of num1) {
    if (!num2.includes(item)) return false;
  }

  return true;
};

console.log(JSON.stringify([1, 4]) == JSON.stringify([1, 4]));

number.addEventListener("input", () => {
  errorSpan.classList.add("hidden");
  event.target.classList.add("border-neutral-600");
  event.target.classList.remove("border-red-600");
  event.target.classList.remove("text-green-500");
});

btn.addEventListener("click", () => {
  const inputValue = number.value;

  if (inputValue.length === 0) {
    number.classList.remove("border-neutral-600");
    return number.classList.add("border-red-600");
  }

  if (+inputValue < 100 || +inputValue > 100000) {
    return handleOutput(false, "Number out of range!");
  }

  let returnArr = [];

  let counter = 0;
  for (let i = 10; i < +inputValue; i++) {
    let numStr = i + "";
    const min = Math.pow(10, numStr.length - 1);
    const max = Math.pow(10, numStr.length) - 1;

    for (let j = min; j <= max; j++) {
      if (checkPrime(j) && checkEquality(numStr, j) && j != i) {
        if (
          returnArr.find((elt) => JSON.stringify(elt) != JSON.stringify([i, j]))
        )
          returnArr.push([i, j]);
      }
    }
  }
  console.log(returnArr)

  handleOutput(true, `Number of circular primes: ${counter}`);
});
