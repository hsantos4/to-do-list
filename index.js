let taskInput = document.getElementById('task-input');
const btn = document.getElementById('btn');
let tasks = document.getElementById('tasks');
let taskArr = [];

console.log(taskInput)

// waits for the button to be clicked and creates a li in the tasks container
    btn.addEventListener('click', function() {
        let liForTask = document.createElement('li');
        tasks.appendChild(liForTask)
        liForTask.textContent = taskInput.value;
      })

