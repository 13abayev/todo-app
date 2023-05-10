const form = document.querySelector("input");
const addInput = document.querySelector("#ab");
const tasklist = document.querySelector(".task-list");
const adder = document.querySelector("#adder");
const deletebtn = document.querySelectorAll("a");
const list = document.querySelector(".list");
let tasks = [];
adder.addEventListener("click", addToDo);
document.addEventListener("DOMContentLoaded", pageLoaded);
list.addEventListener("click", removeToDo);

function removeToDo(e) {
  if (e.target.className === "fa-solid fa-xmark") {
    const todo = e.target.parentElement.parentElement;
    todo.remove();
    removeToDoFromStorage(todo.textContent);
  } else {
  }
}
function removeToDoFromStorage(removetask) {
  checkstorage();
  tasks.forEach(function (todo, index) {
    if (removetask == todo) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function pageLoaded() {
  checkstorage();
  tasks.forEach(function (task) {
    addToToToUI(task);
  });
}
function addToDo(e) {
  const inputText = addInput.value.trim();
  if (inputText == null || inputText == "") {
    alert("Please enter something");
  } else {
    addToToToUI(inputText);
    addToDoToStorage(inputText);
  }
  e.preventDefault();
}
function addToDoToStorage(newToDo) {
  checkstorage();
  tasks.push(newToDo);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function checkstorage() {
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
}
function addToToToUI(newToDo) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const i = document.createElement("i");
  a.href = "#";
  a.className = "delete-item";
  i.className = "fa-solid fa-xmark";
  li.textContent = newToDo;
  a.appendChild(i);
  li.appendChild(a);
  tasklist.appendChild(li);
  addInput.value = "";
}