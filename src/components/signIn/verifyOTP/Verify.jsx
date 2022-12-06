import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import "./Verify.css";

const Verify = () => {
  const [OTP, setOTP] = useState("");
  return (
    <>
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
          secure
        //   style={{  background: "transparent",
        //   borderRadius: "6px",
        //   color: "#F52851",
        //   }}
        className="input-base"
        />
          <ResendOTP onResendClick={() => console.log("Resend clicked")} />

        {/* <input className="input-base" type="number" /> */}


        </div>
        <span className="resend">If you didn’t recieve a code!<span> Resend</span></span>
        <button className="button-IM"><p>Verify</p></button>
      
      </div>
    </>
  );
};

export default Verify;
