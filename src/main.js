import "./index.css";
import {inputEl,yearEL,formEl,taskListEl} from "./domSelection.js";
import Task from "./components/task.js";

const tasks = [];

function renderTasks(){
    taskListEl.innerHTML="";
    
        const fragment = document.createDocumentFragment();
        tasks.forEach((task)=>{
            const taskEl = Task(task.value,task.isCompleted);
            fragment.appendChild(taskEl);
        });
        taskListEl.appendChild(fragment);
    };


formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (!inputEl.value) {
        return;
    }
 
    tasks.unshift({
        id:crypto.randomUUID(),
        value: inputEl.value,
        isCompleted:false,
        
    });
    console.log(tasks);

    // render the tasks 
    renderTasks();
    // empty the input filed
    inputEl.value="";
    



});


// iife function

(function (){
    const year = new Date().getFullYear();
    
    yearEL.textContent=`${year}`;
})();


