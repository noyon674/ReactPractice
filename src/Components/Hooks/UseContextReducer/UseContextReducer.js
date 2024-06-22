import React from 'react';
import Users from './Users';
import NewUser from './NewUser';
import {UserProvider} from './UsersContext';


function UseContextReducer() {
    
  return (
    <UserProvider>
      <NewUser />
      <Users />
    </UserProvider>       
  )
}

export default UseContextReducer;