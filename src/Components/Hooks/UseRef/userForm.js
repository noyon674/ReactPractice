import React, {useRef} from 'react'

function UserForm() {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();
        //finding value from input fields
        const usernameValue = userNameRef.current.value;
        const passValue = passwordRef.current.value;

        console.log(usernameValue, passValue)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username: </label>
                <input type='text' ref={userNameRef}/>
            </div>
            <div>
                <label>password: </label>
                <input type='password' ref={passwordRef}/>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default UserForm