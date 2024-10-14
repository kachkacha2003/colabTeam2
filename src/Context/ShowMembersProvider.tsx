import { createContext, useState, ReactNode, useContext } from "react";
import { IShowMembers } from "../types/Events";


const ShowMembersContext = createContext<IShowMembers>({
    showMembers: false,
    setShowMembers: ()=>{}
})

export default function ShowMembersProvider({children}: {children: ReactNode}){
    const [showMembers, setShowMembers] = useState<boolean>(false)
    return(
        <ShowMembersContext.Provider value={{showMembers, setShowMembers}}>
            {children}
        </ShowMembersContext.Provider>
    
    )
}

export function UseShowMembers(){
    const showmembers = useContext(ShowMembersContext)
    return showmembers
} 