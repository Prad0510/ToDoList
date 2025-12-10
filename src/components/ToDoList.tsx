import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState<string[]>(["Eat breakfast", "Take a shower", 
        "Walk the dog", "Read a book"]);
    const [newTask, setNewTask] = useState<string>('');

    function HandleInputChange(event: React.ChangeEvent<HTMLInputElement>){
        setNewTask(event.target.value);
    }

    function AddTask(){
       
    }

    function DeleteTask(index: number){
       
    }

    function MoveTaskUp(index: number){
       
    }

    function MoveTaskDown(index: number){
       
    }

    return (
        <div className = "to-do-list">
            <h1>To-Do List</h1>
            <div>
            <input 
                type="text" 
                placeholder="Enter a Task....."
                value={newTask} 
                onChange={HandleInputChange}/>
            <button 
                className='Add-button'
                onClick={AddTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <li key = {index}>
                        <span className='text'>{task} </span>
                        <button className='delete-button'
                            onClick={() => DeleteTask(index)}>Delete</button>
                        <button className='up-button'
                            onClick={() => MoveTaskUp(index)}>Up</button>
                        <button className='down-button'
                            onClick={() => MoveTaskDown(index)}>Down</button>
                    </li>)}
            </ol>
        </div>);
}
export default ToDoList;