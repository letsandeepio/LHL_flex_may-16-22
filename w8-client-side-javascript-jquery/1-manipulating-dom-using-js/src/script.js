// get the form
// listen the submit event
// get what user has typed
// adding to existing list

const todoForm = document.querySelector("#new-todo-frm")

todoForm.addEventListener("submit", function(event){
  event.preventDefault();

  const textBox = this.elements.todo;

  const textBoxValue = textBox.value;

  const newTodoItem = document.createElement("li");   

  newTodoItem.textContent = textBoxValue;

  const todoContainer = document.querySelector("#todos");

  todoContainer.append(newTodoItem);

  textBox.value ="";
});


