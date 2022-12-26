import React from "react";
import logo from "../../../assets/images/img_Robosoft logo_registration.png";
import "./RegisterSuccess.css";
import regsuccess from "../../../assets/images/img_registrationsuccess.png";
import { Link, useNavigate } from "react-router-dom";
const RegisterSuccess = () => {
  const navigate= useNavigate()
  const url = 'https://www.robosoftin.com/'
  return (
    <>
      <div className="registration-container">
        <div onClick={()=>{
           navigate("/dashboard");
        }} className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="receive-resume-div">
          <span className="we-have">
            We have successfully received your resume
          </span>
          <span className="thank-you">
            Thank you for your interest to work at Robosoft
          </span>
          <img className="regsuccess-img" src={regsuccess} alt="" />

          <span className="we-will-carefully-co">
            We will carefully consider your application during the initial
            screening to see if they match any of our vacant positions and will
            contact you if you are selected to continue in the recruitment
            process. We wish you every success.
          </span>
        </div>
        <span className="you-can-check-out-ou">
          You can check out our &nbsp;<p style={{cursor:"pointer"}} onClick={() => window.open(url, '_blank')} >Robosoft</p>&nbsp; website for more
          details
        </span>
      </div>
    </>
  );
};

export default RegisterSuccess;
