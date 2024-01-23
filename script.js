function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete" onclick="deleteTask(this)">Excluir</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function deleteTask(button) {
  const li = button.parentNode;
  li.remove();
}
