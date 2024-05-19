import React from "react";
import { Button, TextField } from "@mui/material";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../schema/FormValidations";
import bg from "../../public/images/bg.jpg";

function Login() {
  let initialValues = { email: "", password: "" };
  let { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: LoginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  const navigate = useNavigate();

  function handleSignup() {
    navigate("/signup");
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
          <h2>Login</h2>
          <TextField
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            size="small"
            fullWidth="true"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
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
            onChange={handleChange}
            onBlur={handleBlur}
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
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
          <p>
            Don't have an account? <span onClick={handleSignup}>Sign Up</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
