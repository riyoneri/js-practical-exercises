const number = document.querySelector('[type="number"]');
const btn = document.querySelector("button");

const changeBtn = (checker) => {
  btn.textContent = checker ? "It's circular prime" : "It's not circular prime";
  btn.disabled = true;

  const timer = setTimeout(() => {
    btn.textContent = "Check Prime";
    btn.disabled = false;
    clearTimeout(timer);
  }, 3000);
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

btn.addEventListener("click", () => {
  const inputValue = number.value;
  if (inputValue.length === 0) {
    number.classList.remove("border-neutral-600");
    return number.classList.add("border-red-600");
  }

  number.classList.add("border-neutral-600");
  number.classList.remove("border-red-600");

  if (+inputValue <= 9) {
    return changeBtn(["2", "3", "5", "7"].includes(inputValue));
  }

  if (!checkPrime(inputValue)) return changeBtn(false);

  const min = Math.pow(10, inputValue.length - 1);
  const max = Math.pow(10, inputValue.length) - 1;

  let available = false;
  for (let i = min; i <= max; i++) {
    if (checkPrime(i) && checkEquality(inputValue, i) && i != inputValue) {
      available = true;
      break;
    }
  }

  changeBtn(available);
});
