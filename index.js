let taskInput = document.getElementById('task-input');
const btn = document.getElementById('btn');
let tasks = document.getElementById('tasks');
let taskArr = [];


// waits for the button to be clicked 
    btn.addEventListener('click', function() {
        // creates the html element li
        let liForTask = document.createElement('li');
        // embeds the newly created li to the div
        tasks.appendChild(liForTask)
        // user input is added to the newly created li
        let listOfTask = liForTask.textContent = taskInput.value;
        // adding the list to the empty array
        let updatedList = taskArr.push(listOfTask);
      })

