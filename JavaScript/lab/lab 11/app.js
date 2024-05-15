let todoInput = document.querySelectorAll('.todo-input');
let todoListDiv = document.querySelectorAll('.todo-list');

let allTodos = [];

function add() {
    let newTodo = todoInput[0].value;
    allTodos.push(newTodo);
    printAllTodos();
    todoInput[0].value = "";
}

function printAllTodos() {
    todoListDiv[0].innerHTML = "";
    for (let i = 0; i < allTodos.length; i++) {
        todoListDiv[0].innerHTML += `
            <p id="todo-${i}">
                ${allTodos[i]}
                <button onclick="deleteTodo(${i})">Delete</button>
                <button onclick="editTodo(${i})">Edit</button>
            </p>
        `;
    }
}

function deleteTodo(index) {
    allTodos.splice(index, 1);
    printAllTodos();
}

function editTodo(index) {
    console.log('editTodo func called', index);
}