import "./index.css";
import {inputEl,yearEL,formEl,taskListEl} from "./domSelection.js";
import Task from "./components/task.js";
import { data } from "autoprefixer";

let tasks = [];

// localforage.setDriver(localforage.LOCALSTORAGE);


// iife function

(async()=>{await localforage.getItem("device");
console.log(data);
})();


//The toggle the isCompleted property of the task
//will be called when the user clicks on the task

function toggleTask(id){
    tasks=tasks.map((task)=>{
        if (task.id === id){
            return {
                ...task,
                isCompleted:!task.isCompleted };
            }
            return task;
    });
    tasks.sort((a,b)=>a.isCompleted-b.isCompleted);

}

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
 
    // add task to the list
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
        toggleTask(e.target.closest("label").id);
        renderTasks();
    }

});

// iife function

(function (){
    const year = new Date().getFullYear();
    
    yearEL.textContent=`${year}`;
})();


