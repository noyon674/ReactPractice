import React, { useState } from 'react'

function NewTodo(props) {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e)=>{
    e.preventDefault();
    props.onGettingData(newTodo)
  }
  return <div>
    <label>Add Todo: </label>
    <input name='newTodo' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/>
    <button onClick={handleChange}>Add</button>
  </div>
}

export default NewTodo;