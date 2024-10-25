import * as yup from "yup";
export const schemaEvent = yup.object({
    title: yup
    .string()
    .min(3, "enter min 3 character"),
    

    description: yup
    .string()
    .min(3, "enter min 3 character")
    .required(),

    startDate: yup
    .string()
    .min(1, "choose Date&Time")
    .required(),

    endDate: yup
    .string()
    .min(1, "choose Date&Time")
    .required(),

    maxParticipants: yup
    .number()
    .typeError("can't be empty")
    .min(2, "enter min 2 numbers")
    .required(),

    category: yup
    .string()
    .min(1, "choose one of them")
    .required(),

    terms: yup
    .string()
    .min(10, "enter min 10 character"),
    
    LocationName: yup
    .string()
    .min(3, "enter min 3 character")
    .required(),

    latitude: yup
    .number()
    .typeError("only number")
    .min(2, "enter min 2 symbols")
    .required(),

    longtude: yup
    .number()
    .typeError("only number")
    .min(2, "enter min 2 symbols")
    .required(),

    // acceptingRSVPs: yup
    // .string()
    // .min(2, "can't empty")
    // .required(),

    // UploadImage: yup
    // .string()
    // .min(1, "can't be empty"),

})