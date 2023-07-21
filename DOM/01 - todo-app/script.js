const todoList = document.getElementById("todoList");
const emptyItem = document.querySelector(".default");

let itemCounter = 0;

function addItem() {
  event.preventDefault();
  const input = event.target[0];
  if (input.value.length === 0) {
    input.classList.remove("border-neutral-400");
    return input.classList.add("border-red-500");
  }

  input.classList.remove("border-red-500");
  input.classList.add("border-neutral-400");

  const newItem = document.createElement("li");
  newItem.setAttribute("id", `todoItem${itemCounter}`);
  newItem.setAttribute("class", "flex items-center bg-neutral-200 py-1 px-2");

  newItem.innerHTML = `
    <span class="flex-1 text-sm">${input.value}</span>
    <div class="flex items-center gap-5">
        <input type="checkbox" onchange="checkItem(this)">
        <span onclick="removeItem(this)" class="text-red-400 hover:text-red-700">
            <i class="fa fas fa-circle-xmark"></i>
        </span>
    </div>
  `;

  const emptyItem = document.querySelector(".default");
  emptyItem && emptyItem.remove();

  todoList.insertAdjacentElement("afterbegin", newItem);
  input.value = "";
  itemCounter++;
}

function removeItem(removeBtn) {
  const listItem = removeBtn.closest("li");
  const text = removeBtn.closest("li").children[0].textContent;
  if (!confirm(`Confirm deleting "${text}"`)) return;

  if (listItem.parentNode.children.length === 1) {
    listItem.parentNode.appendChild(emptyItem);
  }
  listItem.remove();
}

function checkItem(checkBtn) {
  checkBtn.closest("li").children[0].classList.toggle("line-through");
}