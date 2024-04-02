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
    <div className='uCard'>
      <User name='Minail' age={21} email='min@gmail.com'/>
      <User name='Mustafa' age={17} email= 'mus@gmail.com'/>
    </div>
    <div className='uCard'>
      <Planets />
    </div>
    <div className='uCard'>
      <Counter />
    </div>
    <div className='uCard'>
      <ShowHide/>
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
