import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Basic Counter</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(0)}}>Reset</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Counter