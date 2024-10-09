import * as yup from "yup";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const signUpScema = yup.object({
  name: yup.string().required().min(5),
  email: yup
    .string()
    .matches(emailRegex, "Please enter a valid email address")
    .required(),
  password: yup.string().min(5).required(),
  Rpassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("min 5 symbol"),
});
