
import React, {useState} from 'react'
import { UserContext } from './UserContext';
import Component2 from './Component2';

function Component1() {
    const [user, setUser] = useState({name: 'Noyon', age: 23});
    const [text, setText] = useState('I am a text');
  return (
    <div>
        <UserContext.Provider value={{user, text}}>
            <Component2 />
        </UserContext.Provider>
    </div>
  )
}

export default Component1