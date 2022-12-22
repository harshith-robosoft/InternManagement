import React from "react";
import "./ChangePassword.css";
import logo from "../../../assets/images/img_Robosoft logo_ref.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UpdatePass } from "../../../services/auth";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {

  const navigate= useNavigate()
  const initialValues = {
    confirmPassword: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Please enter your password"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: async (values, action) => {
        // const res = login(values);
        // action.resetForm();
        // console.log(values)
        const emailDataa = JSON.parse(sessionStorage.getItem("emailas"));

        let dataToSend = {
          emailId: emailDataa,
          password: values.password,
        };
        const newPassword = await UpdatePass(dataToSend);
        console.log("newPassword===", newPassword);

        if (
          newPassword?.result?.opinion === "T" 
        ) {
          console.log("new password generated");
          navigate("/signin");
        }
      },
    });

  return (
    <>
      <div className="internmanage-container">
        <div className="robosoft-intern-div">
          <img src={logo} alt="" />
          <p>INTERN MANAGEMENT</p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="create-password">
            <span className="new-password">Create New Password</span>

            <span className="your-new-password-mu">
              Your new password must be different from previously used
              passwords.
            </span>
            <div className="input-container-cp">
              <label htmlFor="password" className="input-name">
                Password
              </label>
              <input
                placeholder="Enter your Password"
                type="password"
                className="input-cp"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <div className="SignIn-formError">{errors.password}</div>
              ) : null}
            </div>
            <div className="input-container-cp">
              <label htmlFor="confirmPassword" className="input-name">
                Confirm Password
              </label>
              <input
                placeholder="ReEnter your Password"
                type="password"
                className="input-cp"
                id="confirmPassword"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <div className="SignIn-formError">{errors.confirmPassword}</div>
              ) : null}
            </div>

            <button className="button-IM">
              <p>Change Password</p>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
