function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDateTime = document.getElementById('taskDateTime');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') return;

    const li = document.createElement('li');
    
    const formattedDate = taskDateTime.value ? new Date(taskDateTime.value).toLocaleString() : 'No Deadline';

    li.innerHTML = `
        <div class="task-info">
            <span class="task-text">${taskInput.value}</span>
            <span class="task-date">${formattedDate}</span>
        </div>
        <div class="actions">
            <button class="complete-btn" onclick="toggleComplete(this)">✓</button>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button class="delete-btn" onclick="deleteTask(this)">✕</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
    taskDateTime.value = '';
}

function toggleComplete(btn) {
    btn.closest('li').classList.toggle('completed');
}

function deleteTask(btn) {
    btn.closest('li').remove();
}

function editTask(btn) {
    const li = btn.closest('li');
    const taskTextSpan = li.querySelector('.task-text');
    const newText = prompt("Edit your task:", taskTextSpan.innerText);
    if (newText !== null && newText.trim() !== '') {
        taskTextSpan.innerText = newText;
    }
}
