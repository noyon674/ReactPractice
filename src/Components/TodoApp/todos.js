import React from 'react'
import Todo from './todo';

function Todos(props) {
    const {todos} = props;

    const handleRemove = (id)=>{
      props.onGetID(id)
  }
  return (
    <div>
        {
            todos.map((todo, index)=><Todo todo = {todo} key={index} id={index} onGetID={handleRemove}/>)
        }
    </div>
  )
}

export default Todos;