import "./index.css";
import {inputEl,yearEL,formEl,taskListEl} from "./domSelection.js";
import Task from "./components/task.js";

const tasks = [];

function renderTasks(){
    taskListEl.innerHTML="";
    
        const fragment = document.createDocumentFragment();
        tasks.forEach((task)=>{
            const taskEl = Task(task.value,task.isCompleted,task.id);
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
        isCompleted:true,
        
    });
    console.log(tasks);

    // render the tasks 
    renderTasks();
    // empty the input filed
    inputEl.value="";

});

// task list

taskListEl.addEventListener("click", (e) => {
    if (e.target.targetName === "INPUT"){
        console.log(e.target.closest("label").id);
        console.log("hey");
    }
});

// iife function

(function (){
    const year = new Date().getFullYear();
    
    yearEL.textContent=`${year}`;
})();


