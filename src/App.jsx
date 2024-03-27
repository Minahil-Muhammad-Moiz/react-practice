import './App.css'
import Planets from './Components/Planets'
import User from './Components/User'

function App() {
  return (
    <>
    <div>
      <User name='Minail' age={21} email='min@gmail.com'/>
      <User name='Mustafa' age={17} email= 'mus@gmail.com'/>
    </div>
    <div>
      {Planets.map((planet, key)=> !planet.isGasPlanet && <h1>{planet.name}</h1>)}
    </div>
    </>
  )
}

export default App
