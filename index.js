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
        
        
    }
   
    
 }

function done (event) {
    
 }
 

 function removeTask(event) {
       
 }
 addTask();