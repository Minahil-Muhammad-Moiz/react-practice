import './App.css'
import Counter from './Components/Counter'
import Excuse from './Components/Excuse'
import ShowHide from './Components/ShowHide'
import ToDoList from './Components/ToDoList'
import User from './Components/User'
import Planets from './Components/Planets'

function App() {
  return (
    <>
    <div className='Card'>
      <User name='Minail' age={21} email='min@gmail.com'/>
      <User name='Mustafa' age={17} email= 'mus@gmail.com'/>
    </div>
    <div className='Card'>
      <Planets />
    </div>
    <div className='Card'>
      <Counter />
    </div>
    <div className='Card'>
      <ShowHide/>
    </div>
    <div className='Card'>
      <ToDoList />
    </div>
    <div className='Card'>
      <Excuse/>
    </div>
    </>
  )
}

export default App
