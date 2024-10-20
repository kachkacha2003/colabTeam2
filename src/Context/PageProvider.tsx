import { createContext, useContext, ReactNode, useState } from "react";
import { IEvent, IUser } from "../types/Events";
import { Itype } from "../types/ContextType";
import data from "../data.json"


const UsersContext = createContext<Itype>({
  count: 0,
  setCount: () => {},
  users: [],
  setUsers: () => {},
  newEvent: [],
  setNewEvent: () => {},
  showMembers: false,
  setShowMembers: () => {}

});


export default function UserProvider({ children }: { children: ReactNode }) {
  const userData = data.data[3].users
  const [users, setUsers] = useState<IUser[] | undefined>(userData);
  const [count, setCount] = useState<number>(1);
  const eventData = data.data[2].events
  const [newEvent, setNewEvent] = useState<IEvent[] | undefined>(eventData)
  const [showMembers, setShowMembers] = useState<boolean>(false)


  return (
    <UsersContext.Provider value={{ count, setCount, users, setUsers, newEvent, setNewEvent, showMembers, setShowMembers }}>
      {children}
    </UsersContext.Provider>
  );
}

export function Context() {
  const context = useContext(UsersContext);
  return context;
}
