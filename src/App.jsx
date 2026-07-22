import React, { useState } from 'react'
import "./App.css"
const App = () => {
  const [task,setTask]=useState("")
  const [isCompleted,setIsCompleted]=useState(false)
  const [todos,setTodos]=useState([
    {
      text:"Complete React Project",
      date:"2025-12-02 10:30 AM",
      completed:false,
    }
  ])
  const addTodo=()=>{
    if(!task.trim()) return;

    const newTodo={
      text:task,
      date:new Date().toLocaleString(),
      completed:isCompleted,
    };
    setTodos([...todos,newTodo]);
    setTask("");
    setIsCompleted(false);
  }
  const deleteTodo=(index)=>{
    const newTodos=[...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  const toggleCompleted=(index)=>{
    const newTodos=[...todos];
    newTodos[index].completed=!newTodos[index].completed
    setTodos(newTodos);
  }
  return (
    <div className='container'>
      <h2 className='title'>React Todo List</h2>
      <div className='input-section'>
        <input type="text" placeholder='Enter Your Todo'
        className='input-box' value={task} onChange={(e)=>setTask(e.target.value)} />


        
        <label className='checkbox-label'>
          <input type="checkbox" checked={isCompleted}
          onChange={(e)=>setIsCompleted(e.target.checked)}
          className='checkbox' />
          Completed?
        </label>
        <button className='add-btn' onClick={addTodo}>Add</button>

      </div>
        <ul className='todo-list'>
          {
            todos.map((todo,index)=>( 
              <li className={`todo-item ${todo.completed ? "completed":"not-completed"}`}>
                <div className='todo-info'>
                  <div className='todo-text-date'>
                    <p className='todo-text'>{todo.text}</p>
                    <small className='todo-date'>{todo.date} </small>
                  </div>
                </div>
                <div className='action'>
                  <button 
                  onClick={()=>toggleCompleted(index)}
                  className={`status-btn ${todo.completed ? "green":"red"}`}>
                    {
                      todos.completed ? "Mark Not Done" : "Mark Done"
                    }
                  </button>
                  <button className='delete-btn'
                  onClick={()=>deleteTodo(index)}>{"\u{1F5D1}"}</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    
  )
}

export default App