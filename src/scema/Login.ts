import * as yup from "yup";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const loginScema = yup.object({
  email: yup
    .string()
    .matches(emailRegex, "Please enter a valid email address")
    .required(),
  password: yup.string().min(5, "min 5 symbol").required(),
});
