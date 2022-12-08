import React from "react";
import logo from "../../../assets/images/img_Robosoft logo_ref.png"
import "./ForgotPassword.css";
import forgotImage from "../../../assets/images/img_forgotpassword_illustration.png"

const ForgotPassword = () => {
  return (
    <>
      <div className="internmanage-container">
        <div className="robosoft-intern-div">
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
          <input
            type="email"
            className="input"
            placeholder="Enter your Email Adress"
            id="email"
            name="email"
          />

          <button className="button-IM-fp">
            <p>Send</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
