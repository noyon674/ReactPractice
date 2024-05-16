import React, {useState} from 'react'

function AdvanceToggle() {
    const [toggle, setToggle] = useState(true);
  return (
    <div className='center'>
        {/* h1 will be render according to toggle value */}
        {toggle && <h1>Hi, I am Toggle Component</h1>}

        <button onClick={()=>setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default AdvanceToggle;