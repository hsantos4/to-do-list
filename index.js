// Create an HTML file with the basic structure of the to-do list, including an input field, a button to add tasks, and a container to display the list.

// Add CSS styles to make the to-do list look nice and be easy to use.

// Create a JavaScript file and link it to the HTML file.

// In the JavaScript file, select the input field and the button using the document.querySelector() method.

// Use the addEventListener() method to listen for the "click" event on the button or the "keyup" event on the input field.

// When the user adds a task, create a new list item using document.createElement() and add it to the container using the appendChild() method.

// Add the task text to the list item using the textContent property.

// Add a delete button to each list item and use the removeChild() method to remove tasks from the list.

// Use JavaScript array methods to add and remove tasks from an array that represents the list.

// Use localStorage to save the list of tasks so that the user can revisit the page and see their tasks from previous visits.

// Finally, test the to-do list to make sure it works correctly and make any necessary adjustments.


let taskInput = document.getElementById('task-input');
let tasks = document.getElementById('tasks');
const removeTask = document.getElementById('remove-task')
const btn = document.getElementById('btn');

btn.addEventListener('click', createListItem)
// btn.addEventListener('keydown', )

// This function creates the list items and adds it to the body of the tasks
function createListItem() {

  let taskItem = document.createElement('li');
  // adding the class names to the list items
  taskItem.classList.add('task-item', 'hidden')
 // attaching the list item to the task container
 tasks.appendChild(taskItem)


 // This checks to see if the li has the class hidden 
 if(taskItem.classList.contains('hidden')){
   // If it does it removes it
   taskItem.classList.remove('hidden')
 }

 // This addes the user input into the li and the "x" 
 let numberOfTask = taskItem.innerHTML = `${taskInput.value} <span id="remove-task"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
 <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
 <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></span>`;
}

// Creating a function if the user presses the 'Enter' key to submit the task
function ifKeyDownEvent(event, createListItem) {

 }

  



