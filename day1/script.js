const mainTodoApp = document.querySelector('.todo-app');
const todoInput = document.querySelector('#new-task');
const addButton = document.querySelector('.add-task');
const todoList = document.querySelector('#task-list');

const todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

//upadate, delete and render task functions
function renderTask() {
    todoList.innerHTML = '';
    todoList.style.display = todos.length ? 'block' : 'none';

    todos.forEach((task) => {
        const li = document.createElement('li');

        li.className = "list-group-item d-flex justify-content-between align-items-center";

        const span = document.createElement('span');
        span.textContent = task.text;

        if(task.completed) {
            span.style.textDecoration = 'line-through'; 
            span.style.opacity = '0.5';
        }

        const buttonGroup = document.createElement('div');

        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = "✔";
        completeBtn.className = "btn btn-success btn-sm me-2";

        completeBtn.onclick = () => {
            task.completed = !task.completed;
            saveTodos();
            renderTask();
        }

        const editBtn = document.createElement("button");
        editBtn.innerHTML = "✏";
        editBtn.className = "btn btn-warning btn-sm me-2";


        editBtn.onclick = () => {
            const newText = prompt("Edit task:", task.text);
            if(newText != null && newText.trim() !== '') {
                task.text = newText.trim();
                saveTodos();
                renderTask();
            }
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "🗑";
        deleteBtn.className = "btn btn-danger btn-sm";

        deleteBtn.onclick = () => {
            const index = todos.findIndex(t => t.id === task.id);
            if(index !== -1) {
                todos.splice(index, 1);
                saveTodos();
                renderTask();
            }
        }

        buttonGroup.append(completeBtn, editBtn, deleteBtn);
        li.append(span, buttonGroup);
        todoList.appendChild(li);
    });
}





//task adding function
function addTask() {

    const text = todoInput.value.trim();

    if(text === '') {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(task);
    saveTodos();
    renderTask();

    todoInput.value = '';
    todoInput.focus();
}


addButton.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addTask();
    }
});

renderTask();