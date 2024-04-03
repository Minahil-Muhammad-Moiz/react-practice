import Axios from 'axios';
import { useState } from 'react';

const Excuse = () => {
  const [eveExcuse, setExcuse] = useState('')

  const fetchExcuse = (excuse)=>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res)=>{
      setExcuse(res.data[0].excuse)
    });
  }

  return (
    <div>
        <h1>Generate An Excuse</h1>
        <button onClick={()=>{fetchExcuse('family')}}>Family</button>
        <button onClick={()=>{fetchExcuse('college')}}>College</button>
        <button onClick={()=>{fetchExcuse('office')}}>Office</button>
        <p>{eveExcuse}</p>        
    </div>
  )
}

export default Excuse