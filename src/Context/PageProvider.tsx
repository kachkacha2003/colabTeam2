import { createContext, ReactNode, useState } from "react";
import { Itype } from "../types/ContextType";

const statesContext = createContext<Itype>({
  test: false,
  setTest: () => {},
});
export default function PageProvider({ children }: { children: ReactNode }) {
  const [test, setTest] = useState<boolean>(false);
  return (
    <statesContext.Provider value={{ test, setTest }}>
      {children}
    </statesContext.Provider>
  );
}
