import { SetStateAction } from "react";
import { IUser, IEvent, ICoordinates } from "./Events";

export interface Itype {
  users: IUser[] | undefined;
  setUsers: React.Dispatch<React.SetStateAction<IUser[] | undefined>>;
  newEvent: IEvent[] | undefined;
  setNewEvent: React.Dispatch<React.SetStateAction<IEvent [] | undefined>>;
  showMembers: boolean;
  setShowMembers: React.Dispatch<React.SetStateAction<boolean>>;
  coordinates: ICoordinates | null;
  setCoordinates: React.Dispatch<SetStateAction<ICoordinates | null>>
}

