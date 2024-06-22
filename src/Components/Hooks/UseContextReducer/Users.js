import React, {useContext} from 'react';

import { UsersContext } from './UsersContext';
import User from './User';

function Users() {
    const {users, addUser, deleteUser} = useContext(UsersContext);
  return (
    <div>
        {
            users.map(user => <User key={user.id} user = {user}/>)
        }
    </div>
  )
}

export default Users