const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const inputContainer = document.getElementById("input-container");

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
}

taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        if(e.target.classList.contains('completed')){
            e.target.remove();
        }else{
            e.target.classList.add('completed');
        }
    }
});
