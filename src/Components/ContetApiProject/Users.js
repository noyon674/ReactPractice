import React, {useContext} from 'react';

import { UsersContext } from './CreateContext';
import User from './User';

function Users() {
    const {users} = useContext(UsersContext);

  return (
    <div>
        {
            users.map(user => <User key = {user.id} user = {user}/>)
        }
    </div>
  )
}

export default Users