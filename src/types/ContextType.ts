import { IUser, IEvent } from "./Events";

export interface Itype {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  users: IUser[] | undefined;
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>;
  newEvent: IEvent[] | undefined;
  setNewEvent: React.Dispatch<React.SetStateAction<IEvent[] | undefined>>;
  showMembers: boolean;
  setShowMembers: React.Dispatch<React.SetStateAction<boolean>>;
}

