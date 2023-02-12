import { useFormik } from "formik";
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .required("Why not give an email😏")
    .min(5, "Need a bigger email😅"),
  password: yup
    .string()
    .required("Why not set a password 😏")
    .min(8, "Pasword too small 😅")
    .max(12, "Password too big 😅"),
});

export default function BasicForm() {
  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <TextField
        name="email"
        label="Email"
        type="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email ? errors.email : null}
      <TextField
        name="password"
        label="Password"
        type="text"
        placeholder="Password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && touched.password ? errors.password : null}
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}
