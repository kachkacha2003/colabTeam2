import { createContext, ReactNode, useContext, useState } from "react";
import { INewEventContext, TEvents } from "../types/Events";
import data from "../data.json";

const NewEventContext = createContext<INewEventContext>({
    newEvent: [],
    setNewEvent: () => {},
  });

  export default function EventProvider({ children }: { children: ReactNode }) {
    const eventData = data.data[2].events;
    console.log(eventData)
    const [newEvent, setNewEvent] = useState<TEvents>(eventData)
    return (
        <NewEventContext.Provider value={{newEvent, setNewEvent}}
        >
          {children}
        </NewEventContext.Provider>
      );
    }

    
export function UseNewEvent() {
    const neweventcontext = useContext(NewEventContext);
    return neweventcontext;
  };