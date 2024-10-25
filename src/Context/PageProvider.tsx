import { createContext, useContext, ReactNode, useState } from "react";
import { IEvent, IUser, ICoordinates, INewEvent  } from "../types/Events";
import { Itype } from "../types/ContextType";
import data from "../data.json"


const UsersContext = createContext<Itype>({
  users: [],
  setUsers: () => { },
  newEvent: [],
  setNewEvent: () => { },
  showMembers: false,
  setShowMembers: () => { },
  coordinates: {
    lat: 0,
    log: 0
  },
  setCoordinates: () => {},
});


export default function UserProvider({ children }: { children: ReactNode }) {
  const userData = data.data[3].users;
  const [users, setUsers] = useState<IUser[] | undefined>(userData);
  const eventData = data.data[1].events;
  const [newEvent, setNewEvent] = useState<IEvent[] | undefined>(eventData);
  const [showMembers, setShowMembers] = useState<boolean>(false)
  const [coordinates, setCoordinates] = useState<ICoordinates | null>(null);

console.log(newEvent)

  return (
    <UsersContext.Provider value={{
      users, setUsers, 
      newEvent, setNewEvent, 
      showMembers, setShowMembers, 
      coordinates, setCoordinates,
      }}>
      {children}
    </UsersContext.Provider>
  );
}

export function Context() {
  const context = useContext(UsersContext);
  return context;
}
