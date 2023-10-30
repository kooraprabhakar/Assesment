import React, { useState } from 'react'
import './App.css'
import Home from './components/Home';
import TextDisplay from './components/TextDisplay';
import { nanoid } from 'nanoid';

function App() {
  const [task , setTask]  = useState([]);

  const addTask =(text)=>{
    const newTask = {
      text, 
      id : nanoid()
    }
    setTask([...task , newTask])
  }

  const deleteTask = (taskId)=>{
    const deleteTask = task.filter((ta)=> ta.id !== taskId)
    setTask(deleteTask)
    console.log(task)
  }

  return (
    <div>{
      console.log(task)}
      <Home addTask = {addTask}/>
      < TextDisplay task={task}  deleteTask = {deleteTask} />
    </div>


  )
}

export default App
