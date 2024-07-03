
const input = document.getElementById('input');
const button = document.getElementById('button');
const ul = document.getElementById('ul');

function createTodoItem(task) {
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';

    deleteButton.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteButton);
    ul.appendChild(li);
}

button.addEventListener('click', function() {
    const task = input.value.trim();

    if (task !== '') {
        createTodoItem(task);
        input.value = '';
    }
});

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        button.click();
    }
});
