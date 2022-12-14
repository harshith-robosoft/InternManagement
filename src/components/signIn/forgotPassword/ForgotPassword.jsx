// import React from "react";
// import logo from "../../../assets/images/img_Robosoft logo_ref.png"
// import "./ForgotPassword.css";
// import forgotImage from "../../../assets/images/img_forgotpassword_illustration.png"

// const ForgotPassword = () => {
//   return (
//     <>
//       <div className="internmanage-container">
//         <div className="robosoft-intern-div">
//           <img src={logo} alt="" />

//           <p>INTERN MANAGEMENT</p>
//         </div>

//         <div className="ForgotPassword-forgotDiv">
//           <div className="ForgotPassword-forgotText">Forgot Password ?</div>

//           <div className="ForgotPassword-forgotImage">
//             <img src={forgotImage} alt="forgotImage" />
//           </div>

//           <div>
//             <div className="ForgotPassword-forgotTextTwo">
//               Enter the email address associated with your accont
//             </div>

//             <div className="ForgotPassword-forgotTextThree">
//               We will mail you a link to reset your password
//             </div>
//           </div>
//           <input
//             type="email"
//             className="input-fp"
//             placeholder="Enter your Email Adress"
//             id="email"
//             name="email"
//           />

//           <button className="button-IM-fp">
//             <p>Send</p>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ForgotPassword;

import React from "react";
import logo from "../../../assets/images/img_Robosoft logo_ref.png";
import "./ForgotPassword.css";
import forgotImage from "../../../assets/images/img_forgotpassword_illustration.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import { forgotPassword } from "../../../services/auth";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("You have entered an invalid email address")
      .required("Please enter your email"),
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
        //fetch
        let dataToSend = {
          emailId: values.email,
        };
        const forgotPassData = await forgotPassword(dataToSend);
        console.log("forgotp", forgotPassData);
        console.log(values);
        sessionStorage.setItem("emailas", JSON.stringify(values.email));
        JSON.parse(sessionStorage.getItem("emailas"));
  


        navigate("/otp");
      },
    });

  return (
    <>
      <div className="ForgotPassword-internmanage-container">
        <div className="ForgotPassword-robosoft-intern-div">
          <img src={logo} alt="" />

          <p>INTERN MANAGEMENT</p>
        </div>

        <div className="ForgotPassword-forgotDiv">
          <div className="ForgotPassword-forgotText">Forgot Password ?</div>

          <div className="ForgotPassword-forgotImage">
            <img src={forgotImage} alt="forgotImage" />
          </div>

          <div>
            <div className="ForgotPassword-forgotTextTwo">
              Enter the email address associated with your accont
            </div>

            <div className="ForgotPassword-forgotTextThree">
              We will mail you a link to reset your password
            </div>
          </div>

          <form className="ForgotPassword-formElement" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="ForgotPassword-input"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors && touched ? (
                <>
                  <div className="SignIn-formError">{errors.email}</div>
                </>
              ) : null}
            </div>
            <button className="button-IM-fp">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
