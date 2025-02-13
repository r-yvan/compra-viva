import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  username: Yup.string().min(3, "Username must not be less than 3 characters").required("Username required"),
  email: Yup.string().email("Email must be a valid email").required("Email required"),
  password: Yup.string().min(4, "Password must not be less than 4 characters").required("Password required"),
  role: Yup.string()
    .oneOf(["administrator", "buyer", "seller"])
    .required("Role required"),
});
