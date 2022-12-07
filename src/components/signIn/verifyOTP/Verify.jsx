import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import "./Verify.css";
import logo from "../../../assets/images/img_Robosoft logo_ref.png"

const Verify = () => {
  const [OTP, setOTP] = useState("");
  return (
    <>

<div className="internmanage-container">
      <div className="robosoft-intern-div">
        <img src={logo} alt="" />
        <p>INTERN MANAGEMENT</p>
      </div>

      <div className="verification-body">
        <span className="verification">Verification</span>
        <span className="enter-the-verificati ">
          Enter the verification code we just sent you on your email address.
        </span>
        <div className="otp">
        <OTPInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          inputStyles={{  
          background:"transparent",
          outline:"none",
          borderRadius: "6px",
          border:" 1px solid #FFFFFF",
          color: "#F52851",
          }}
        />
          {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
        </div>
        <span className="resend">If you didn’t recieve a code!<span> Resend</span></span>
        <button className="button-IM"><p>Verify</p></button>      
      </div>
    </div>
      
    </>
  );
};

export default Verify;
