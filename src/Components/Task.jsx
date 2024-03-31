const Task = (props) => {
  return (
    <div className="task">
        <p>{props.taskName}</p>
        <button 
          onClick={()=>{props.completeTask(props.id)}}
          style={{backgroundColor: props.completed ? 'green': "white",
                  color: props.completed ? "white": "slategray"}}>Completed</button>
        <button onClick={()=>{props.deleteTask(props.id)}}>X</button>
    </div>
  )
}

export default Task