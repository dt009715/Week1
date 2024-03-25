const status = false;
const Message = document.getElementById('message');
const getList = document.getElementById('list');
const addButton= document.getElementById('addButton');
const removeButton = document.getElementById('removeButton') 

 const addTask = () => {
    const taskValue = Message.value;
    if(taskValue !== ''){
        const li = document.createElement('li');
        li.textContent = taskValue;
        getList.appendChild(li);
        Message.value = '';
        li.addEventListener('click', done);
        
    }
    getList.addEventListener('click', removeTask);
    
 }

function done (event) {
    const task = event.target;
    task.classList.toggle('completed')
 }
 

 function removeTask(event) {
        const task = event.target.parentElement;
        getList.removeChild(task);
 }
 addTask();