import { useState } from "react"

const ToDoList = () => {
    const [newTask, setNewTask] = useState('');
  return (
    <>
        <h1>To Do List</h1>
        <div className='AddTask'>
            <input/>
            <button>Add Task</button>
        </div>
        <div className='List'></div>
    </>
  )
}

export default ToDoList