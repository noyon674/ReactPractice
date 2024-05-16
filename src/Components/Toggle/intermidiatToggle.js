import React, {useState} from 'react'

function IntermidiatToggle() {
    const [toggle, setToggle] = useState(true);
  return (
    <div className='center'>
        {/* H1 is render according toggle value */}
        {toggle && <h1>Hi, I am Toggle Component</h1>}

        {toggle ? <button onClick={()=>setToggle(false)}>Hide</button> : <button onClick={()=>setToggle(true)}>Show</button>}
    </div>
  )
}

export default IntermidiatToggle;