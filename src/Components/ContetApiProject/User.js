import React, {useContext} from 'react';

import { UsersContext } from './CreateContext';

function User(props) {
    const {id, name} = props.user;
  const {users, setUsers} = useContext(UsersContext)

    const handleDelete = (id)=>{
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    }

  return (
    <div style={{backgroundColor:'violet', width:'300px', margin:'auto', marginTop:'10px', textAlign:'center'}}>
        <h2>{id}</h2>
        <h2>{name}</h2>
        <button onClick={()=>handleDelete(id)}>del</button>
    </div>
  )
}

export default User