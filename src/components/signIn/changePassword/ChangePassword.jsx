import React from "react";
import "./ChangePassword.css";
import logo from "../../../assets/images/img_Robosoft logo_ref.png"
const ChangePassword = () => {
  return (
    <>

<div className="internmanage-container">
      <div className="robosoft-intern-div">
        <img src={logo} alt="" />
        <p>INTERN MANAGEMENT</p>
      </div>

      <div className="create-password">
        <span className="new-password">Create New Password</span>

        <span className="your-new-password-mu">
          Your new password must be different from previously used passwords.
        </span>
        <div className="input-container-cp">
          <span className="input-name">Password</span>
          <input
            placeholder="Enter your Password"
            type="password"
            className="input-cp"
          />
        </div>
        <div className="input-container-cp">
          <span className="input-name">Confirm Password</span>
          <input
            placeholder="ReEnter your Password"
            type="password"
            className="input-cp"
          />
        </div>

        <button className="button-IM">
          <p>Change Password</p>
        </button>
      </div>
    </div>
      
    </>
  );
};

export default ChangePassword;
