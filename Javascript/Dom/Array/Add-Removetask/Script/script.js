
function addTask() {
    var taskValue = document.getElementById('newTask').value;
    if (taskValue) {
        var li = document.createElement('li');
        li.textContent = taskValue;
        li.onclick = function() {
            this.classList.toggle('task-completed');
        };
        };
        document.getElementById('taskList').appendChild(li);
        document.getElementById('newTask').value = '';
    }

