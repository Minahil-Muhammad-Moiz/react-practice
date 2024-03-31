const Task = (props) => {
  return (
    <div className="task">
        <p>{props.taskName}</p>
        <button onClick={()=>{props.deleteTask(props.id)}}>X</button>
    </div>
  )
}

export default Task