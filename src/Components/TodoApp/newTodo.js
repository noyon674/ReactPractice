import React, {useState} from 'react';
import style from './style.module.css';

function NewTodo(props) {
  const [newTodo, setNewTodo] = useState();

  return (
    <div>
        <form>
            <input className={style.input} 
            type='text' 
            placeholder='Enter Name' 
            onChange={(e)=>setNewTodo(e.target.value)}/>

            <button 
            className={style.button}
            onClick={(e)=>{e.preventDefault(); props.onGetData(newTodo)}}>Add</button>
        </form>
    </div>
  )
}

export default NewTodo