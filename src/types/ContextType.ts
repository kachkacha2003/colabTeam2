import { IUser } from "./Events";

export interface Itype {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  users: IUser[] | undefined;
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>;
}
