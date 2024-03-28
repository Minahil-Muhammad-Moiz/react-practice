import './App.css'
import Planets from './Components/Planets'
import User from './Components/User'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [showText, setShowText] = useState(true)

  const increaseCount = ()=>{
    setCount(count+1)
  }

  const newName = (event)=>{
    setName(event.target.value)
  }
  return (
    <>
    <div>
      <User name='Minail' age={21} email='min@gmail.com'/>
      <User name='Mustafa' age={17} email= 'mus@gmail.com'/>
    </div>
    <div>
      {Planets.map((planet, key)=> !planet.isGasPlanet && <h1>{planet.name}</h1>)}
    </div>
    <div className='uCard'>
      <h1>Basic Counter</h1>
      <h1>{count}</h1>
      <br/>
      <button onClick={increaseCount}>Count</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
    <div className='uCard'>
      <input type='text' onChange={newName}/>
      <h1>{name}</h1>
    </div>
    <div className='uCard'>
      <button onClick={()=>setShowText(!showText)}>Show/Hide</button>
      {showText && <h1>This was the hidden text</h1>}
    </div>
    </>
  )
}

export default App
