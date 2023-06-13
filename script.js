const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete-button">Excluir</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';

        const deleteButton = taskItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', deleteTask);
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
}
