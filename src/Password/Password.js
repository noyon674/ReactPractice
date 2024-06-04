import React, {useState} from 'react'

function Password() {
    const [pass, setPass] = useState(true)
  return (
    <div className='center'>
        <input placeholder='password' type={pass ? 'password' : 'text'}/>
        <button onClick={()=>{setPass(!pass)}}>{pass ? 'Show' : 'Hide'}</button>
    </div>
  )
}

export default Password;