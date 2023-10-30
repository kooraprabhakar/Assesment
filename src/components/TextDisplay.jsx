import React from 'react'

const TextDisplay = ({task , deleteTask}) => {
  return (
    <div style={{marginLeft:30}}>
        {task.map((ta)=>{
            return(
                <div key={ta.id}>
                    <div style={{marginLeft :10 , fontSize: 20 , fontWeight:400 }}>{ta.text}</div>
                    <button style={{background:'yellow', margin:'5px' , borderRadius:5 , outline:'none' , border:'none' , padding:3}}
                    >Edit</button>
                    <button style={{background:'red' , margin:'5px' , borderRadius:5 , outline:'none' , border:'none' , padding:3}}
                    onClick={()=>{deleteTask(ta.id)}}
                    >Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default TextDisplay