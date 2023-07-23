const num1 = document.querySelector("#number1")
const num2 = document.querySelector("#number2")
const messageHolder = document.querySelector(".msg");

function displayMessage() {
    if(+num1.value > +num2.value) {
        messageHolder.classList.remove("hidden")
        messageHolder.textContent = "First number is larger"
    } else if(+num1.value < +num2.value) {
        messageHolder.classList.remove("hidden")
        messageHolder.textContent = "Second number is larger"
    } else {
        messageHolder.classList.add("hidden")
    }
}

num1.addEventListener("input", displayMessage)
num2.addEventListener("input", displayMessage)