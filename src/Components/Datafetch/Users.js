import React, {useContext} from 'react';

import User from './User';
import { UsersContext } from './CreateContext';

function Users() {
    
    const {users, setUsers} = useContext(UsersContext);

  return (
    <div>
        {
            users.map(user =><User user = {user} key = {user.id}/>)
        }
    </div>
  )
}

export default Users