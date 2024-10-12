import { createContext, ReactNode, useContext, useState } from "react";
import { Itype } from "../types/ContextType";
import { IEvent } from "../types/Events";
import data from "../data.json"

const statesContext = createContext<Itype, IEvent>({
  test: false,
  setTest: () => {},
  newevent: [],
  setNewEvent: () => {},
});

export default function PageProvider({ children }: { children: ReactNode }) {
  const eventData = data.data[2].events
  const [test, setTest] = useState<boolean>(false);
  const [newevent, setNewEvent] = useState<IEvent | undefined>(eventData)

console.log(newevent)
  return (
    <statesContext.Provider 
    value={{ test, setTest, newevent, setNewEvent }}
    >
      {children}
    </statesContext.Provider>
  );
}
export function Context() {
  const context = useContext(statesContext);
  return context;
};

