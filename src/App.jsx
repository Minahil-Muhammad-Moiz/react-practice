import './App.css'
import Planets from './Components/Planets'
import User from './Components/User'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = ()=>{
    setCount(count+1)
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
    </>
  )
}

export default App
