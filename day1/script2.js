const addButton = document.querySelector('.add-task');
const input = document.querySelector('#new-task');
const list = document.querySelector('#task-list');

// Load saved tasks, then use the array for rendering and user actions.
const todos = JSON.parse(localStorage.getItem('todos')) || []

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(todos))
}


function renderTodo(){
    list.innerHTML = '';
    list.style.display = todos.length ? "block" : 'none';

    todos.forEach((task) => {
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";


        const span = document.createElement('span');
        span.innerHTML = task.text;

        if(task.completed){
            span.style.textDecoration = 'line-through';
            span.style.opacity = '0.5';
        }

        const btnGroup = document.createElement("div");
        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = "✔";
        completeBtn.className = "btn btn-success btn-sm me-2";


        completeBtn.onclick = () => {
            task.completed = !task.completed;
            saveTodo();
            renderTodo();
        }


        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "🗑";
        deleteBtn.className = "btn btn-danger btn-sm";

        deleteBtn.onclick = ()=>{
            const index = todos.findIndex(t=>t.id === task.id);
            if(index !== -1){
                todos.splice(index, 1);
                saveTodo();
                renderTodo();
            }
        }

        btnGroup.append(completeBtn, deleteBtn);
        li.append(span, btnGroup);
        list.appendChild(li)
    })

}

function addTodo(){
    const text = input.value.trim();

    if(text === ''){
        alert("Please enter text or something")
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false,
    }


    todos.push(task);
    saveTodo();
    renderTodo();

    input.value = '';
    input.focus();
}
addButton.addEventListener("click", addTodo);

input.addEventListener("keypress",(e)=>{
    if(e.key === 'Enter'){
        addTodo();
    }
})

renderTodo();