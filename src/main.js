import localforage from "localforage";
import "./index.css";
import { inputEl, yearEl, formEl, taskListEl } from "./domSelection.js";
import Task from "./components/task.js";

let state = [];

localforage.getItem("tasks").then((tasks) => {
  if (tasks) {
    state = tasks;
    console.log(state);
    renderTasks();
  }
});



//The toggle the isCompleted property of the task
//will be called when the user clicks on the task

function toggleTask(id) {
  state = state.map((task) => {
    if (task.id === id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      };
    }
    return task;
  });

  //show uncompleted state first
  state.sort((a, b) => a.isCompleted - b.isCompleted);
  localforage.setItem("tasks", state);
}

function renderTasks() {
  taskListEl.innerHTML = "";

  const fragment = document.createDocumentFragment();

  state.forEach((task) => {
    const taskEl = Task(task.value, task.isCompleted, task.id);
    fragment.appendChild(taskEl);
  });

  //render on real DOM
  taskListEl.appendChild(fragment);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent page reload
  if (!inputEl.value) {
    return;
  }

  // add task to the list
  state.unshift({
    id: crypto.randomUUID(),
    value: inputEl.value,
    isCompleted: false,
  });

  console.log(state);
localforage.setItem("tasks", state);

  // render the state
  renderTasks();
  // empty the input filed
  inputEl.value = "";
});

// task list

taskListEl.addEventListener("click", (e) => {
  if (e.target.tagName === "INPUT") {
    console.log(e.target.closest("label").id);
    toggleTask(e.target.closest("label").id);
    renderTasks();
  }
});

// iife function

(function () {
  const year = new Date().getFullYear();
  //mark update DOM
  yearEl.textContent = `${year}`;
})();
