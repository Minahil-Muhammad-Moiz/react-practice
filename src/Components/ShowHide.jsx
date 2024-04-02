import { createContext } from "react"
import { useState } from "react"
import User from "./User"

export const UserContext = createContext()

const ShowHide = () => {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [age, setAge] = useState()
    const [email, setEmail] = useState('')
    const [userCard, setUserCard] = useState(false)

    const reset =()=>{
      setName('');
      setAge();
      setEmail('');
      setUserCard(false)
    }

  return (
    <div>
      <UserContext.Provider value={{ name, age, email }} >
        <button onClick={()=>{setShow(!show)}}>Make User Card</button>
        {show && 
            <div>
                <h1>Enter User Information</h1>
                <input type='text' onChange={(eve)=>{setName(eve.target.value)}} placeholder="name"/>
                <input type='number' onChange={(eve)=>{setAge(eve.target.value)}} placeholder="age"/>
                <input type='email' onChange={(eve)=>{setEmail(eve.target.value)}} placeholder="email"/>
                <button onClick={()=>{setUserCard(!userCard)}}>Display </button>
                <button onClick={reset}>New User</button>
                {userCard && <User/>}
            </div>}
        
    </UserContext.Provider>
    </div>
  )
}

export default ShowHide