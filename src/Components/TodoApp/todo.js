import React from 'react';
import style from './style.module.css';

function Todo(props) {
    const {todo, id} = props;
    const handleClick = ()=>{
        props.onGetID(id)
    }
  return (
    <div key={id}>
        <p className={style.todo}>{todo} <span className={style.del} onClick={handleClick}>del</span></p>
    </div>
  )
}
export default Todo;