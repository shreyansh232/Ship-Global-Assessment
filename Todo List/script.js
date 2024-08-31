// Initial todo items
const initialTodos = [
    { id: 1, text: 'task 1', status: 'backlog' },
    { id: 2, text: 'task 2', status: 'backlog' },
    { id: 3, text: 'task 3', status: 'backlog' },
    { id: 4, text: 'task 4', status: 'todo' },
    { id: 5, text: 'task 5', status: 'todo' },
    { id: 6, text: 'task 6', status: 'todo' },
    { id: 7, text: 'task 7', status: 'ongoing' },
    { id: 8, text: 'task 8', status: 'ongoing' },
    { id: 9, text: 'task 9', status: 'done' },
    { id: 10, text: 'task 10', status: 'done' },
];

// Define the order of status columns
const statusOrder = ['backlog', 'todo', 'ongoing', 'done'];

// Function to render all todos
function renderTodos() {
    statusOrder.forEach(status => {
        // Get the list element for the current status
        const statusList = document.querySelector(`#${status} .todo-list`);
        statusList.innerHTML = '';
        
        // Filter and render todos for the current status
        initialTodos.filter(todo => todo.status === status).forEach(todo => {
            const li = document.createElement('li');
            li.className = 'todo-item';
            li.innerHTML = `
                ${todo.text}
                <div class="nav-buttons">
                    <button onclick="moveTodo(${todo.id}, 'left')" ${status === 'backlog' ? 'disabled' : ''}>←</button>
                    <button onclick="moveTodo(${todo.id}, 'right')" ${status === 'done' ? 'disabled' : ''}>→</button>
                </div>
            `;
            statusList.appendChild(li);
        });
    });
}

// Function to move todo between status columns
function moveTodo(id, direction) {
    const todo = initialTodos.find(todo => todo.id === id);
    const currentStatusIndex = statusOrder.indexOf(todo.status);
    
    // Move left if not in the first column
    if (direction === 'left' && currentStatusIndex > 0) {
        todo.status = statusOrder[currentStatusIndex - 1];
    } 
    // Move right if not in the last column
    else if (direction === 'right' && currentStatusIndex < statusOrder.length - 1) {
        todo.status = statusOrder[currentStatusIndex + 1];
    }
    
    // Re-render todos after moving
    renderTodos();
}

// Initial render of todos
renderTodos();