import React, {useState} from 'react';

import Users from './Users';
import NewUser from './NewUser';
import UserProvider, { UsersContext } from './CreateContext';

/*const dummeyUsers = [
    {id:1, name: 'Noyon'},
    {id:2, name: 'Purna'},
];
*/

//component start from here
function ContextHome() {
    //const [users, setUsers] = useState(dummeyUsers);


    //return statement from here
  return (
    <UserProvider>
      <NewUser />
      <Users />
    </UserProvider>
    
  )
}

export default ContextHome