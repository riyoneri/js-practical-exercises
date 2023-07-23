const hours = document.querySelector('input[name="hour"]');
const minutes = document.querySelector('input[name="minute"]');
const seconds = document.querySelector('input[name="second"]');
const btn = document.querySelector("button");
const msg = document.querySelector(".msg");
let timer;

const changeColor = () => {
  if (event.target.value > 60) {
    return event.target.classList.add("text-red-700");
  }
  event.target.classList.remove("text-red-700");
};

minutes.addEventListener("input", changeColor);
seconds.addEventListener("input", changeColor);

btn.addEventListener("click", () => {
  msg.classList.add("hidden");
  if (timer) {
    btn.textContent = "Start Countdown";
    hours.disabled = minutes.disabled = seconds.disabled = false;
    btn.classList.replace("bg-red-500", "bg-green-900");
    clearInterval(timer);
    return (timer = null);
  }

  if (
    hours.value < 0 ||
    minutes.value < 0 ||
    seconds.value < 0 ||
    (hours.value == 0 && minutes.value == 0 && seconds.value == 0) ||
    seconds.classList.contains("text-red-700") ||
    minutes.classList.contains("text-red-700")
  ) {
    msg.classList.remove("hidden");
    msg.classList.add("text-red-500");
    return (msg.textContent = "Enter valid time");
  }

  btn.textContent = "Stop Countdown";
  btn.classList.replace("bg-green-900", "bg-red-500");
  hours.disabled = minutes.disabled = seconds.disabled = true;

  hours.value = +hours.value;
  minutes.value = +minutes.value;
  seconds.value = +seconds.value;

  timer = setInterval(() => {
    seconds.value -= 1;

    if (hours.value == 0 && minutes.value == 0 && seconds.value == 0) {
      msg.classList.contains("text-red-500") &&
        msg.classList.remove("text-red-500");
      msg.classList.contains("hidden") && msg.classList.remove("hidden");

      btn.textContent = "Start Countdown";
      hours.disabled = minutes.disabled = seconds.disabled = false;
      btn.classList.replace("bg-red-500", "bg-green-900");

      msg.textContent = "Time's up!";
      clearInterval(timer);
      return (timer = null);
    }

    if (seconds.value < 1) {
      minutes.value -= 1;
      seconds.value = 59;
    }

    if (minutes.value < 0) {
      if (hours.value > 0) {
        hours.value -= 1;
        minutes.value = 59;
      } else {
        minutes = 0;
      }
    }
  }, 1000);
});
