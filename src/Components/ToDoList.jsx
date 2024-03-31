import { useState } from "react"

const ToDoList = () => {
    const [newTask, setNewTask] = useState('');
    const [TodoList, setTodoList] = useState([])
 
    const deleteTask= (taskName)=>{
      const newTodoList = TodoList.filter((task)=>{
        if (task === taskName){
          return false
        }else{
          return true
        }
      })
      setTodoList(newTodoList)
    }
  return (
    <>
        <h1>ToDo List</h1>
        <div className='AddTask'>
            <input onChange={(eve)=>(setNewTask(eve.target.value))}/>
            <button onClick={()=>(setTodoList([...TodoList, newTask]))}>Add Task</button>
        </div>
        <div className='List'>
          {TodoList.map((task)=>{
            return (
              <div>
                <p>{task}</p>
                <button onClick={()=>{deleteTask(task)}}>X</button>
              </div>
            )
          })}
        </div>
    </>
  )
}

export default ToDoList