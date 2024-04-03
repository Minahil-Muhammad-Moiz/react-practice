import './App.css'
import Counter from './Components/Counter'
import Excuse from './Components/Excuse'
import ShowHide from './Components/ShowHide'
import ToDoList from './Components/ToDoList'
import Planets from './Components/Planets'
import Navbar from './Components/Navbar'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Project from './Pages/Project'

function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Project" element={<Project />} />
        </Routes>
    </Router>
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
