let todoInput = document.querySelectorAll(".todo-input")[0];
let todoListDiv = document.querySelectorAll(".todo-list")[0];

function add() {
  let newTodo = todoInput.value;
  printAllTodos(newTodo);
  todoInput.value = "";
}
function printAllTodos(todoText) {
  let newTodoItem = makeTodoEl(todoText);
  todoListDiv.appendChild(newTodoItem);
}

function makeTodoEl(newTodoText) {
  let pEl = document.createElement("P");
  let textNode = document.createTextNode(newTodoText);
  pEl.appendChild(textNode);

  let delBtn = document.createElement("BUTTON");
  let delText = document.createTextNode("Delete");
  delBtn.appendChild(delText);
  delBtn.setAttribute("onclick", "deleteTodo(this)");

  let edtBtn = document.createElement("BUTTON");
  let edtText = document.createTextNode("Edit");
  edtBtn.appendChild(edtText);
  edtBtn.setAttribute("onclick", "editTodo(this)");

  pEl.appendChild(delBtn);
  pEl.appendChild(edtBtn);

  return pEl;
}
function deleteTodo(el) {
  let targetNode = el.parentNode;
  todoListDiv.removeChild(targetNode);
}

let todoInputContainer = document.querySelectorAll("#add-todo-container")[0];
let editTodoContainer = document.querySelectorAll("#edit-todo-container")[0];
let editForm = document.querySelectorAll(".edit-todo-input")[0];
let editValue;
function editTodo(el) {
  editValue = el.parentNode.childNodes[0];
  editForm.value = editValue.nodeValue;
  todoInputContainer.className += " hide";
  editTodoContainer.className = "";
}

function updateTodo() {
  console.log(editForm.value);
  editValue.nodeValue = editForm.value;
  todoInputContainer.className = "";
  editTodoContainer.className += " hide";
}
