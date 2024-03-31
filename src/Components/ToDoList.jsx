import { useState } from "react"
import Task from "./Task";

const ToDoList = () => {
    const [newTask, setNewTask] = useState('');
    const [TodoList, setTodoList] = useState([])
 
    const  addItem = () =>{
        const task = {
            id: TodoList.length === 0 ? 1: TodoList[TodoList.length-1].id +1,
            taskName: newTask
          }
        setTodoList([...TodoList, task]);
      }
    
      const deleteTask= (id)=>{
      setTodoList(TodoList.filter((task)=> task.id !== id))
    }
  return (
    <>
        <h1>ToDo List</h1>
        <div className='AddTask'>
            <input onChange={(eve)=>(setNewTask(eve.target.value))}/>
            <button onClick={addItem}>Add Task</button>
        </div>
        <div className='List'>
          {TodoList.map((task)=>{
            return (
              <Task 
                taskName = {task.taskName}
                id = {task.id}
                deleteTask= {deleteTask}/>
            )
          })}
        </div>
    </>
  )
}

export default ToDoList