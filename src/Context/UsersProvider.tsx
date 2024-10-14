import { createContext, useContext, ReactNode, useState } from "react";
import { IUsers, TUsers } from "../types/Events";
import data from "../../src/data.json"


const UsersContext = createContext<IUsers>({
    users: [],
    setUsers: () => {},
});

export default function  UserProvider({children}: {children: ReactNode}){
    const userData=data.data[3].users
    const [users, setUsers] = useState<TUsers>(userData)
    return (
        <UsersContext.Provider value={{users, setUsers}}>
        {children}
        </UsersContext.Provider>
    )
}

export function UseUsers(){
    const userContext = useContext(UsersContext);
    return userContext
}