import React, {useContext} from 'react';
import { UserContext } from './UserContext';

function Component4() {
    const {user, text} = useContext(UserContext)
  return (
    <div>
        <h2>{user.name}</h2>
        <h2>{user.age}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Component4