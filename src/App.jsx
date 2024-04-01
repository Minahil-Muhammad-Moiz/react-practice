import './App.css'
import Excuse from './Components/Excuse'
import Planets from './Components/Planets'
import ToDoList from './Components/ToDoList'
import User from './Components/User'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [showText, setShowText] = useState(true)

  return (
    <>
    <div className='uCard'>
      <User name='Minail' age={21} email='min@gmail.com'/>
      <User name='Mustafa' age={17} email= 'mus@gmail.com'/>
    </div>
    <div className='uCard'>
      {Planets.map((planet, key)=> !planet.isGasPlanet && <h1>{planet.name}</h1>)}
    </div>
    <div className='uCard'>
      <h1>Basic Counter</h1>
      <h1>{count}</h1>
      <br/>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
    <div className='uCard'>
      <input type='text' onChange={(eve)=>setName(eve.target.value)}/>
      <h1>{name}</h1>
    </div>
    <div className='uCard'>
      <button onClick={()=>setShowText(!showText)}>Show/Hide</button>
      {showText && <h1>This was the hidden text</h1>}
    </div>
    <div className='uCard'>
      <ToDoList />
    </div>
    <div className='uCard'>
      <Excuse/>
    </div>
    </>
  )
}

export default App
