const taskInput = document.getElementById("task");
taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="remove-button" onclick="removeTask(this)">Remove</button>
    `;
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    const taskList = document.getElementById("taskList");
    const li = button.parentElement;
    taskList.removeChild(li);
}