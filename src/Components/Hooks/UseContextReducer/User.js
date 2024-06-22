import React, {useContext} from 'react';

import { UsersContext } from './UsersContext';

function User(props) {
    const {users,addUser, deleteUser} = useContext(UsersContext);
    const {id, name} = props.user;

    const handleDelete = (id)=>{
      deleteUser(id)
    }

  return (
    <div style={{backgroundColor:"teal", color:'white', width:"300px", textAlign:'center', margin:"auto", padding:"10px 0", marginTop:"10px"}}>
        <h3>{id}</h3>
        <h3>{name}</h3>
        <button onClick={e=>handleDelete(id)}>del</button>
    </div>
  )
}

export default User;