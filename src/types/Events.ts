
export interface IEvent { 
  id: number;
  title: string;
  description: string;
  privacy: string;
  medium: string;
  startDate: string;
  endDate: string;
  duration: number;
  language: string;
  maxParticipants: number;
  category: string;
  terms: string;
  LocationName: string;
  latitude: number;
  longtude: number;
  acceptingRSVPs: string;
  UploadImage: string;
  Members: number;
}
export type TEvents = IEvent[];
export interface INewEvent {
  newEvent: TEvents,
  setNewEvent: React.Dispatch<React.SetStateAction<TEvents | undefined>> 

}

export interface IUser {
  id: number;
  userName: string;
  email: string;
  photo: string;
}
export type TUsers = IUser[];
export interface IUsers {
  users: TUsers;
  setUsers: React.Dispatch<React.SetStateAction<TUsers | undefined>>;
}

export interface ICoordinates {
  lat: number;
  lon: number
}




