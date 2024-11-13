import "./index.css";
import {inputEl,yearEL,formEl} from "./domSelection.js";

const tasks = [];

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    if (!inputEl.value) {
        return;
    }
 
    tasks.push({title: inputEl.value,
        isCompleted:false,
        id:crypto.randomUUID(),
    });
    console.log(tasks);
    // empty the input filed
    inputEl.value="";
    



});


// iife function

(function (){
    const year = new Date().getFullYear();
    
    yearEL.textContent=`${year}`;
})();

inputEl.addEventListener("keyup",(e)=>{
    console.log("hello");
});