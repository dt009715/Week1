const bla = 2;
console.log(bla);
const status = false;
const list = [];
const button = document.querySelector('button');
const task = document.getElementById('message');
const getList = document.getElementById('list');
const button1 = document.getElementById('button1');

const onClick = () => button.addEventListener('click', (event) => {
    list.push(task.value)
})
 const TodoList = () => {
    return {
        addTo(task){
            if (button1.onClick()) {
                list.push(task.value);
                
            }    
        },
        updateList(){
            return li.value = list;
            
        }
        
    }
 }


 function done () {

 }
 TodoList();
    console.log(list)