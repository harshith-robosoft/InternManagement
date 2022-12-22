import React from "react";
import logo from "../../../assets/images/img_Robosoft logo_ref.png";
import "./SignUp.css";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { signup } from "../../../services/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const StyledFormControlLabel = styled((props) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    ".MuiFormControlLabel-label": checked && {
      color: theme.palette.error.main,
    },
  }));

  function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
    let checked = false;
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  MyFormControlLabel.propTypes = {
    value: PropTypes.any,
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    desg: "",
    changePassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("You have entered a invalid mail address")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
    mobile: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Please enter mobile number"),
    desg: Yup.string().required("Please enter desgination"),
    changePassword: Yup.string().oneOf(
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
        console.log(values);
        let position = document.querySelector(
          '[name="use-radio-group"]:checked'
        ).value;
        // action.resetForm();
        let dataToSend = {
          name: values.name,
          emailId: values.email,
          mobileNumber: values.mobile,
          designation: values.desg,
          position: position,
          password: values.password,
        };
        const memberSignup = await signup(dataToSend);
        console.log("Received Response", memberSignup);

        // console.log(values);
      },
    });

  return (
    <>
      <div className="internmanage-container">
        <div className="robosoft-intern-div">
          <img src={logo} alt="" />
          <p>INTERN MANAGEMENT</p>
        </div>
        <div className="SignUp-div">
          <div className="SignUp-helloText">Hello!</div>
          <div className="SignUp-signUpText">Sign Up to get started</div>
          <form className="SignUp-form" onSubmit={handleSubmit}>
            <div className="SignUp-formFieldOne">
              <div className="SignUp-inputField">
                <label htmlFor="name" className="SignUp-input-name">
                  Name
                </label>
                <input
                  type="name"
                  className="SignUp-input"
                  placeholder="Your Good Name"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <div className="SignIn-formError">{errors.name}</div>
                ) : null}
              </div>
              <div className="SignUp-inputField">
                <label htmlFor="email" className="SignUp-input-name">
                  Email ID
                </label>
                <input
                  type="email"
                  className="SignUp-input"
                  placeholder="Your Robosoft Mail ID"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <div className="SignIn-formError">{errors.email}</div>
                ) : null}
              </div>
            </div>

            <div className="SignUp-formFieldOne">
              <div className="SignUp-inputField">
                <label htmlFor="mobile" className="SignUp-input-name">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="SignUp-input"
                  placeholder="Your Mobile Number"
                  id="mobile"
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.mobile && touched.mobile ? (
                  <div className="SignIn-formError">{errors.mobile}</div>
                ) : null}
              </div>
              <div className="SignUp-inputField">
                <label htmlFor="desg" className="SignUp-input-name">
                  Company Designation
                </label>
                <input
                  type="text"
                  className="SignUp-input"
                  placeholder="Your Company Designation"
                  id="desg"
                  name="desg"
                  value={values.desg}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.desg && touched.desg ? (
                  <div className="SignIn-formError">{errors.desg}</div>
                ) : null}
              </div>
            </div>

            <div className="SignUp-radioDiv">
              <div className="SignUp-position">Position</div>
              <RadioGroup
                name="use-radio-group"
                defaultValue="Recruiter"
                row
                style={{ display: "flex", gap: "2rem" }}
              >
                <MyFormControlLabel
                  value="Recruiter"
                  label="Recruiter"
                  className="SignUp-radioButtons"
                  control={<Radio color="error" />}
                />
                <MyFormControlLabel
                  value="Organizer"
                  label="Oragnizer"
                  className="SignUp-radioButtons"
                  control={<Radio color="error" />}
                />
                <MyFormControlLabel
                  value="Approval Authority"
                  label="Approval Authority"
                  className="SignUp-radioButtons"
                  control={<Radio color="error" />}
                />
              </RadioGroup>
            </div>

            <div className="SignUp-formFieldOne">
              <div className="SignUp-inputField">
                <label htmlFor="password" className="SignUp-input-name">
                  Password
                </label>
                <input
                  type="password"
                  className="SignUp-input"
                  placeholder="Enter your Password"
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
              <div className="SignUp-inputField">
                <label htmlFor="changePassword" className="SignUp-input-name">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="SignUp-input"
                  placeholder="ReEnter your Password"
                  id="changePassword"
                  name="changePassword"
                  value={values.changePassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.changePassword && touched.changePassword ? (
                  <div className="SignIn-formError">
                    {errors.changePassword}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="SignUp-buttonField">
              <button className="SignUp-button-IM">
                <p>Sign In</p>
              </button>
            </div>
          </form>

          <div className="SignUp-SignInDiv">
            <div className="SignUp-alreadyHaveAnAccount">
              Already have an Account ?
            </div>
            <div
              onClick={() => {
                navigate("/signin");
              }}
              className="SignUp-againSignIn"
            >
              &nbsp;Sign In
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
