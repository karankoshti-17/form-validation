import React from "react";
import { Button, TextField } from "@mui/material";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterSchema } from "../schema/FormValidations";

function Signup() {
  let initialValues = { name: "", email: "", password: "", cpassword: "" };

  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RegisterSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }
  return (
    <>
      <div
        className="form-mainbody"
        style={{
          backgroundImage: 'url("../../public/images/bg.jpg")',
          backgroundSize: "cover",
        }}
      >
        <div className="login-reg-form">
          <h2>Register</h2>
          <TextField
            label="Name"
            type="text"
            name="name"
            variant="outlined"
            size="small"
            fullWidth="true"
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.name && errors.name ? (
            <p
              style={{
                textAlign: "left",
                marginTop: "-25px",
                marginBottom: "-10px",
                fontSize: "14px",
                color: "red",
              }}
            >
              {errors.name}
            </p>
          ) : null}
          <TextField
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            size="small"
            fullWidth="true"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.email && errors.email ? (
            <p
              style={{
                textAlign: "left",
                marginTop: "-25px",
                marginBottom: "-10px",
                fontSize: "14px",
                color: "red",
              }}
            >
              {errors.email}
            </p>
          ) : null}
          <TextField
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            size="small"
            fullWidth="true"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.password && errors.password ? (
            <p
              style={{
                textAlign: "left",
                marginTop: "-25px",
                marginBottom: "-10px",
                fontSize: "14px",
                color: "red",
              }}
            >
              {errors.password}
            </p>
          ) : null}
          <TextField
            label="Confirm Password"
            type="password"
            name="cpassword"
            variant="outlined"
            size="small"
            fullWidth="true"
            value={values.cpassword}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.cpassword && errors.cpassword ? (
            <p
              style={{
                textAlign: "left",
                marginTop: "-25px",
                marginBottom: "-10px",
                fontSize: "14px",
                color: "red",
              }}
            >
              {errors.cpassword}
            </p>
          ) : null}
          <Button variant="contained" onClick={handleSubmit}>
            Register
          </Button>
          <p>
            Already Registered? <span onClick={handleLogin}>Log In</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
