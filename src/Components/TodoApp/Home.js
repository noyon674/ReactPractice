import React, { useState } from 'react';
import style from'./style.module.css';
import NewTodo from './newTodo';
import Todos from './todos';

const dummeyTodo = [];

function Home() {
    const [todos, setTodos] = useState(dummeyTodo);

    const handleGetting = (data)=>{
        setTodos([...todos, data]);
    }
    const handleRemove = (id)=>{
        const filteredTodo = todos.filter((todo, index)=>{
            return index !== id;
        });
        setTodos(filteredTodo)
    }
  return (
    <div>
        <h2 className={style.heading}>Friends Listing App</h2>
        <div className={style.app}>
            <NewTodo onGetData = {handleGetting}/>
        </div>
        <div className={style.main}>
            <Todos todos = {todos} onGetID = {handleRemove}/>
        </div>
    </div>
  )
}

export default Home