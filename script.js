function addTask() {
  const input = document.getElementById('tf-input').value;
  const task = document.createElement('li');
  task.textContent = input;
  task.id =
    new Date().valueOf().toString() +
    Math.random().toString(36).substring(2, 7);
  task.classList.add('list-item');
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    editTask(task.id, input);
  });
  task.appendChild(editButton);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', () => {
    deleteTask(task.id);
  });
  task.appendChild(deleteButton);
  document.getElementById('task-container').appendChild(task);
  document.getElementById('tf-input').value = '';
}

function deleteTask(id) {
  const task = document.getElementById(id);
  task.remove();
}

function editTask(id, name) {
  const button = document.getElementById('add-button');
  const input = document.getElementById('tf-input');
  input.value = name;
  button.textContent = 'Edit';
  button.addEventListener('click', () => {
    submitEdit(id);
  });
}

function submitEdit(id) {
  const input = document.getElementById('tf-input').value;
  const button = document.getElementById('add-button');
  const item = document.getElementById(id);
  item.textContent = input;
  button.textContent = 'Add Task';
}
