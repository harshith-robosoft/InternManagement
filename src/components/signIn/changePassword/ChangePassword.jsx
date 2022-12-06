import React from "react";
import "./ChangePassword.css";

const ChangePassword = () => {
  return (
    <div>
      <div className="create-password">
        <span className="new-password">Create New Password</span>

        <span className="your-new-password-mu">
          Your new password must be different from previously used passwords.
        </span>
        <div className="input-container">
          <span className="input-name">Password</span>
          <input
            placeholder="Enter your Password"
            type="password"
            className="input"
          />
        </div>
        <div className="input-container">
          <span className="input-name">Confirm Password</span>
          <input
            placeholder="ReEnter your Password"
            type="password"
            className="input"
          />
        </div>

        <button className="button-IM">
          <p>Change Password</p>
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
