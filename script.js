const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Load existing tasks from local storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
for (let i = 0; i < tasks.length; i++) {
    const newTask = document.createElement("li");
    newTask.innerHTML = tasks[i];
    taskList.appendChild(newTask);
}

taskInput.addEventListener("keyup", function(e) {
    if (e.keyCode === 13) {
        addTask();
    }
});

function addTask(){
    if (taskInput.value === "") {
        return;
    }
    const newTask = document.createElement("li");
    newTask.innerHTML = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = "";
    tasks.push(newTask.innerHTML);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        if(e.target.classList.contains('completed')){
            e.target.remove();
            tasks.splice(tasks.indexOf(e.target.innerHTML), 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }else{
            e.target.classList.add('completed');
        }
    }
});
