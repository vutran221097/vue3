import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required.")
    .email("Email is invalid."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("This field is required."),
});

export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required.")
    .email("Email is invalid."),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("This field is required."),
  confirmPassword: yup
    .string()
    .required("This field is required.")
    .min(6, "Confirm password must be at least 6 characters")
    .test("passwords-match", "Passwords must match", function (value) {
      return value === this.parent.password;
    }),
});
