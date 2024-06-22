import React, {useState, createContext} from "react";
export const UsersContext = createContext({});

const dummeyUsers = [
    {id:1, name: 'Noyon'},
    {id:2, name: 'Purna'},
];

 const UserProvider = ({children})=>{
    const [users, setUsers] = useState(dummeyUsers);

   return <UsersContext.Provider value={{users, setUsers}}>
        {children}
    </UsersContext.Provider>
}

export default UserProvider;