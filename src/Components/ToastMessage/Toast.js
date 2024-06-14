import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast() {

    const handleClick = ()=>{
        toast('New todo is added')
    }
  return (
    <div>
        <h1>Todo App</h1>
        <button onClick={handleClick}>Add</button>
        <ToastContainer />
    </div>
  )
}

export default Toast