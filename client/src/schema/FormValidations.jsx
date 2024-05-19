import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter email"),

  password: Yup.string()
    .min(8, "Password should be of 8 digit")
    .max(16, "Too long")
    .required("Please enter password"),
});

export const RegisterSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name is too short")
    .max(10, "Name is too long")
    .required("Please enter name"),

  email: Yup.string().email().required("please enter email"),

  password: Yup.string()
    .min(8, "Password should be of 8 digit")
    .max(16, "Too long")
    .required("Please enter password"),

  cpassword: Yup.string()
    .required("Enter confirm password")
    .oneOf([Yup.ref("password"), null], "Password must be match"),
});
