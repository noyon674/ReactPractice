import React, {useState, useContext} from 'react';

import { UsersContext } from './UsersContext';

function NewUser() {
    const [userName, setUserName] = useState('');
    const {user, addUser, deleteUser} = useContext(UsersContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newUser = {id: new Date().getTime().toString(), name: userName}
        addUser(newUser)
        setUserName('')
    }

  return (
    <div style={{textAlign:'center'}}>
        <h2>Add New User</h2>
        <form action='' onSubmit={handleSubmit}>
            <input
            type='text'
            value={userName}
            placeholder='Enter username'
            onChange={e=>setUserName(e.target.value)}
            required />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default NewUser