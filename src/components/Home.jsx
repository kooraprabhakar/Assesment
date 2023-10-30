import React, { useState } from 'react'
import '../App.css'


const Home = ({addTask}) => {

    const [text , setText] = useState("")

    const handleSubmit = () =>{
          if(text.trim() !== ""){
            addTask(text)
            setText('')
          }
    }
  return (
    <div className='Todo'>
        <input type="text" style={{padding:10, borderRadius:10}} value={text} onChange={(e)=>{setText(e.currentTarget.value)}} />
        <button onClick={handleSubmit} style={{padding:10}}>Submit</button>
    </div>
  )
}

export default Home