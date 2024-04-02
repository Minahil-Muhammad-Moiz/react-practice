import { useState } from "react"

const ShowHide = () => {
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')

  return (
    <div>
        <button onClick={()=>{setShow(!show)}}>Show / Hide</button>
        {show && 
            <div>
                <h1>This was hidden Text.</h1>
                <input type='text' onChange={(eve)=>{setText(eve.target.value)}} placeholder="type somethinng over here"/>
                <h4>{text}</h4>
            </div>}
    </div>
  )
}

export default ShowHide