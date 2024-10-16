import { createContext, useContext, ReactNode, useState } from "react";
import { IUser } from "../types/Events";
import { Itype } from "../types/ContextType";
const UsersContext = createContext<Itype>({
  count: 1,
  setCount: () => {},
  users: [],
  setUsers: () => {},
});
export default function UserProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<IUser[] | undefined>([
    {
      id: 1,
      userName: "",
      email: "",
      photo: "",
    },
  ]);
  const [count, setCount] = useState<number>(1);
  return (
    <UsersContext.Provider value={{ count, setCount, users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

export function Context() {
  const context = useContext(UsersContext);
  return context;
}
