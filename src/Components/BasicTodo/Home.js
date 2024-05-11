import React, { useState } from 'react';
import Todos from './Todos';
import NewTodo from './newTodo';

const dummayTodos = ['Todo 1', 'Todo 2'];

function Home() {
    const [todos, setTodos] = useState(dummayTodos);

    const handleGetting = (receivedData)=>{
        setTodos([...todos, receivedData])
    }
  return (
    <div className='center'>
        <NewTodo onGettingData = {handleGetting}/>
        <Todos todos = {todos}/>
    </div>
  )
}

export default Home