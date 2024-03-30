import { useState } from "react"

const ToDoList = () => {
    const [newTask, setNewTask] = useState('');
    const [TodoList, setTodoList] = useState([])
  return (
    <>
        <h1>ToDo List</h1>
        <div className='AddTask'>
            <input onChange={(eve)=>(setNewTask(eve.target.value))}/>
            <button onClick={()=>(setTodoList([...TodoList, newTask]))}>Add Task</button>
        </div>
        <div className='List'>
          {TodoList.map((task)=>{return<p>{task}</p>})}
        </div>
    </>
  )
}

export default ToDoList