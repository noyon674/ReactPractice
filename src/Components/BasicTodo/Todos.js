import React from 'react'
import Todo from './todo.js'

function Todos(props) {
  return (
    <div>
        {
            props.todos.map((item, index)=><Todo todo = {item} key={index}/>)
        }
    </div>
  )
}

export default Todos