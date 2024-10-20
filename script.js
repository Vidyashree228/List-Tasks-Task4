document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const taskText = taskInput.value.trim();
    const taskDateTime = taskDate.value;

    if (taskText === '' || taskDateTime === '') {
        alert('Please enter a task and a date/time.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span>${taskText} - ${new Date(taskDateTime).toLocaleString()}</span>
        <div>
            <button class="complete">Complete</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = '';
    taskDate.value = '';

    taskItem.querySelector('.complete').addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    taskItem.querySelector('.edit').addEventListener('click', () => {
        const newTaskText = prompt('Edit your task:', taskText);
        const newTaskDate = prompt('Edit your task date/time:', taskDateTime);

        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskItem.querySelector('span').innerHTML = `${newTaskText} - ${new Date(newTaskDate).toLocaleString()}`;
        }
    });

    taskItem.querySelector('.delete').addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}