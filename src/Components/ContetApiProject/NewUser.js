import React, { useState, useContext } from 'react';

import { UsersContext } from './CreateContext';

function NewUser() {

  const {users, setUsers} = useContext(UsersContext);
  const [userName, setUserName] = useState('');

  const handleSubmit = (e)=>{
      e.preventDefault();
      const newUser = {id: new Date().getTime().toString(), name: userName};
      setUsers([...users, newUser]);
      setUserName('')
  }

  return (
    <div style={{textAlign:'center'}}>
        <h2>User Registration</h2>
        <form action='' onSubmit={handleSubmit}>
            <input
            type='text'
            placeholder='Enter Name'
            value={userName}
            onChange={e=>setUserName(e.target.value)}
            required />
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default NewUser