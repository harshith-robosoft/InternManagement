import React from "react";
import "./SignIn.css";
import logo from "../../../assets/images/img_Robosoft logo_ref.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import wrngTick from "../../../assets/images/icn_error_tick.png";
import crctTick from "../../../assets/images/icn_done_tick.png";
import { login } from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getName } from "../../../features/RegisterSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const candidateName = useSelector(getName);
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("You have entered a invalid mail address")
      .required("Please enter your email"),

    password: Yup.string().required("Please enter your password"),
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: async (values, action) => {
        const res = await login({ ...values, role: candidateName });
        // action.resetForm();
        // console.log({ ...values, role: candidateName });
        // console.log(res);
        if (res?.result?.opinion === "T") {
          console.log("--------Iam here");
          navigate("/dashboard");
        }

        console.log(values);
      },
    });

  return (
    <div className="internmanage-container">
      <div className="robosoft-intern-div">
        <img src={logo} alt="" />

        <p>INTERN MANAGEMENT</p>
      </div>

      <div className="SignIn-div">
        <div className="SignIn-WelcomeDiv">
          <div className="SignIn-WelcomeTextOne">
            <div className="SignIn-helloText">Hello Again </div>

            <div className="SignIn-recruiterText"> {candidateName}</div>
          </div>

          <div className="SignIn-WelcomeTextTwo">Welcome Back</div>
        </div>
        <div className="SignIn-FormDiv">
          <form className="SignIn-Form" onSubmit={handleSubmit}>
            <div className="SignIn-formField">
              <div className="SignIn-FormInput">
                <div className="input-container">
                  <label htmlFor="email" className="input-name">
                    Email ID
                  </label>

                  <div className="SignIn-checkField">
                    <input
                      type="email"
                      className="input-si"
                      placeholder="Enter your Email ID"
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    <div className="tickImage">
                      {errors.password && touched.password ? (
                        <img
                          src={wrngTick}
                          alt="wrngTick "
                          className="SignIn-tick"
                        />
                      ) : (
                        <img
                          src={crctTick}
                          alt="crctTick"
                          className="SignIn-tick"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {errors.email && touched.email ? (
                  <div className="SignIn-formError">{errors.email}</div>
                ) : null}
              </div>

              <div className="SignIn-FormInput">
                <div className="input-container">
                  <label htmlFor="password" className="input-name">
                    {" "}
                    Password
                  </label>

                  <div className="SignIn-checkField">
                    <input
                      type="password"
                      className="input-si"
                      placeholder="Enter your Password"
                      id="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="tickImage">
                      {errors.password && touched.password ? (
                        <img
                          src={wrngTick}
                          alt="wrngTick "
                          className="SignIn-tick"
                        />
                      ) : (
                        <img
                          src={crctTick}
                          alt="crctTick"
                          className="SignIn-tick"
                        />
                      )}
                    </div>

                    {errors.password && touched.password ? (
                      <div className="SignIn-formError">{errors.password}</div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div
                onClick={() => {
                  navigate("/forgotpass");
                }}
                className="SignIn-forgotPassword"
              >
                Forgot Password?
              </div>
            </div>

            <button className="button-IM-si">
              <p>Sign In</p>
            </button>
          </form>
        </div>

        <div className="FirstScreen-SignUpTextDiv">
          <div className="FirstScreen-NewInternText">
            New to Intern Management&nbsp;?
          </div>

          <div
            onClick={() => {
              navigate("/signup");
            }}
            className="FirstScreen-SignUpText"
          >
            SIGNUP
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
