import { useEffect, useState } from "react";


function Todo(){
const getItem = (key) => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

const setItem = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};



 const [task, Settasks] = useState(() => {
    const savedTasks = getItem("tasks"); 
    return savedTasks || [];
  });
  
  const [newTask, SetNewTask] = useState("");

  
  useEffect(() => {
    setItem("tasks", task); 
  }, [task]);


function handlechange(event){
    SetNewTask(event.target.value)
}

function addtask(){
    if(newTask.trim() !== ""){
        Settasks(t => [...t, newTask]);
    SetNewTask(" ");
    }

}
function deletetask(index){
 const updatedtask = task.filter((Element, i) => i !== index);
 Settasks(updatedtask);
};
function MoveUp(index){
if(index > 0){
    const updatedtask = [...task];
    [updatedtask[index], updatedtask[index-1]] = [updatedtask[index-1], updatedtask[index]];
    Settasks(updatedtask)
}
}
function movedown(index){
if(index < task.length-1){
    const updatedtask = [...task];
    [updatedtask[index], updatedtask[index+1]] = [updatedtask[index+1], updatedtask[index]];
    Settasks(updatedtask)
}
}

return(
    <div>
          <h1>To Do List</h1>
        <div>
  
        <input type = "text" 
        placeholder="enter a task"
        value={newTask}
        onChange={handlechange}/>
        <button onClick={addtask}>Add</button>
        </div>
        <ol>
          {  task.map((task, index) =>
             <li key={index}><span> {task}</span> 
             <button onClick={() => deletetask(index)}>Delete</button>
             <button onClick={() => MoveUp(index)}>Move Up</button>
             <button onClick={() => movedown(index)}>Move Down</button>
             </li>)}
        </ol>
        
    </div>
)

}

export default Todo;