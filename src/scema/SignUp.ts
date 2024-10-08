import * as yup from "yup";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const signUpScema = yup.object({
  name: yup.string().required(),
  email: yup
    .string()
    .matches(emailRegex, "Please enter a valid email address")
    .required(),
  password: yup.string().min(2).required(),
  Rpassword: yup.string().min(2).required(),
});
