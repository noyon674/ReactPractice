import React, {useState} from 'react'

function Toggle() {
    const [toggle, setToggle] = useState(true)
  return (
    <div className='center'>
      {/* If toggle is true h1 component will be render */}
      {toggle && <h1>Hi, I am Toggle Component</h1>}

      <button onClick={()=>setToggle(true)}>Show</button> &nbsp; &nbsp;
      <button onClick={()=>setToggle(false)}>Hide</button>
    </div>
  )
}

export default Toggle;