import React, { useState } from 'react'

function NewTodo(props) {
    const [newTodo, setTodo] = useState('');

    const handleClick = (e)=>{
        e.preventDefault();
        props.onGettingData(newTodo);
    }
  return (
    <div>
        <form>
            <label>New Todo:</label>
            <input type='name' value={newTodo} onChange={(e)=>setTodo(e.target.value)}/>
            <button onClick={handleClick}>Add</button>
        </form>
    </div>
  )
}

export default NewTodo;