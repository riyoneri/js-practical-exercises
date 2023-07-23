const btns = document.querySelectorAll("#btn");

btns.forEach((button) => {
  button.addEventListener("click", (event) => {
    const list = event.target.closest("li");

    if (!list.firstElementChild.value) return;
    
    event.target.closest("li").style.backgroundColor = "pink";
    event.target.closest("li").style.backgroundColor =
      list.firstElementChild.value;
  });
});
