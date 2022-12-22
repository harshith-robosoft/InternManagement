import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import "./Verify.css";
import logo from "../../../assets/images/img_Robosoft logo_ref.png";
import { useFormik } from "formik";
import { forgotPassword, otpVerify } from "../../../services/auth";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Verify = () => {
  const [OTP, setOTP] = useState("");
  const [memeberOtp, setMemberOtp] = useState("")
  const navigate= useNavigate()
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  // const handleSubmit = (e,values) => {
  //   e.preventDefault();
  //   console.log((values));
  // }

  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    setOTP("")
  };

 
  const resendData  =   async () => {
      // const res = login(values);
      // action.resetForm();
      //fetch
      const emailDataa = JSON.parse(sessionStorage.getItem("emailas"));
      let dataToSend = {
        emailId: emailDataa,
      };
      const forgotPassData = await forgotPassword(dataToSend);
      console.log("forgotp in verify", forgotPassData);
      console.log(values);
      



      // navigate("/otp");
    }
  
  const initialValues = {
    OTP: "",
    email: "",

  };
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      onSubmit: async (values, action) => {
        // console.log(values);
        const emailData = JSON.parse(sessionStorage.getItem("emailas"));
        let dataToSend = {
          otp: OTP,
          emailId: emailData,
          
        };
        console.log(dataToSend);
        const memberOtp = await otpVerify(dataToSend);
        console.log("Received otp", memberOtp);

        if (
          memberOtp?.result?.opinion === "T" 
        ) {
          console.log("Right Otp recieved");
          navigate("/changepass");
        }
        setMemberOtp(memberOtp)
        // console.log(values);
        if (
          memberOtp?.result?.opinion === "F" 
        ) {
          setOpen(true);
          
        }
        
      },
    });
  // const otp = JSON.parse(sessionStorage.getItem("emailas"));
  // console.log(otp);
  return (
    <>
    <Stack spacing={2} sx={{ width: '100%' }}>
      <div className="internmanage-container">
        <div className="robosoft-intern-div">
          <img src={logo} alt="" />
          <p>INTERN MANAGEMENT</p>
        </div>
        <form onSubmit={handleSubmit}>
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
                background: "transparent",
                outline: "none",
                borderRadius: "6px",
                border: " 1px solid #FFFFFF",
                color: "#F52851",
              }}
            />
            {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
          </div>
          {memeberOtp?.result?.opinion === "F" ? (
                     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                     <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                     Invalid Otp! Please Click on Resend Otp.
                     </Alert>
                   </Snackbar>
                ) : (
                  " "
                )}
              
          <span className="resend">
            If you didn’t recieve a code!<span onClick={()=>{
              resendData()
            }}> Resend</span>
          </span>
          <button className="button-IM">
            <p>Verify</p>
          </button>
       
        </div>
        </form>
      </div>
      </Stack>
    </>
  );
};

export default Verify;
