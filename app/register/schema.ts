import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  username: Yup.string().min(3).required("Username required"),
  email: Yup.string().email().required("Email required"),
  password: Yup.string().min(4).required("Password required"),
  role: Yup.string()
    .oneOf(["administrator", "buyer", "seller"])
    .required("Role required"),
});
