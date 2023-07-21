let counter = 10;
const btns = document.querySelectorAll("button");
const timeHolder = document.querySelector("#time");
const buttonContainer = document.querySelector(".btn-container")

timeHolder.textContent = counter;
const timer = setInterval(() => {
  counter--;
  timeHolder.textContent = counter;
  if (counter == 0) {
    buttonContainer.classList.add("hidden")
    clearInterval(timer)};
}, 1000);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    counter += +event.target.dataset.time + 1;
  });
});
