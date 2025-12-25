/*
const input = document.getElementById("taskInput");//getElementById connects JS to HTML
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", function () {
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;
   li.addEventListener("click", function () {//addEventListener reacts to user actions
    //li.remove(); ----it removes on clicking
    li.classList.toggle("completed");// it marks as done

  });

  list.appendChild(li);
  input.value = "";
});
*/
//-----------------------------------------------------------------------------------------------
/*
const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

// Load tasks when page loads
loadTasks();

button.addEventListener("click", function () {
  const taskText = input.value;

  if (taskText === "") return;

  addTask(taskText, false);
  saveTasks();
  input.value = "";
});

function addTask(text, completed) {
  const li = document.createElement("li");
  li.textContent = text;

  if (completed) {
    li.classList.add("completed");
  }

  li.addEventListener("click", function () {
    li.classList.toggle("completed");
    saveTasks();
  });

  list.appendChild(li);
}

function saveTasks() {
  const tasks = [];

  document.querySelectorAll("li").forEach(li => {
    tasks.push({
      text: li.textContent,
      completed: li.classList.contains("completed")
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");

  if (!savedTasks) return;

  const tasks = JSON.parse(savedTasks);

  tasks.forEach(task => {
    addTask(task.text, task.completed);
  });
}
*/
//---------------------------------------------------------------------------------------------------------------
const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

// Load saved tasks on page load
loadTasks();

button.addEventListener("click", function () {
  const taskText = input.value;
  if (taskText === "") return;

  addTask(taskText, false);
  saveTasks();
  input.value = "";
});
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});


function addTask(text, completed) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  if (completed) {
    span.classList.add("completed");
  }

  span.addEventListener("click", function () {
    span.classList.toggle("completed");
    saveTasks();
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";

  deleteBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // prevents toggle
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);
}

function saveTasks() {
  const tasks = [];

  document.querySelectorAll("li").forEach(li => {
    const span = li.querySelector("span");
    tasks.push({
      text: span.textContent,
      completed: span.classList.contains("completed")
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (!savedTasks) return;

  const tasks = JSON.parse(savedTasks);
  tasks.forEach(task => {
    addTask(task.text, task.completed);
  });
}

