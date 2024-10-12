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
  };

 export  type TEvents = IEvent[];



 

