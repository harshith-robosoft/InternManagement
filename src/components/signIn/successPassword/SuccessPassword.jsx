import React from 'react'
import "./SuccessPassword.css"
import logo from "../../../assets/images/img_Robosoft logo_ref.png"
import Success from "../../../assets/images/img_success_illustration.png"
const SuccessPassword = () => {
  return (

    <div className="internmanage-container">
    <div className="robosoft-intern-div">
      <img src={logo} alt="" />
      <p>INTERN MANAGEMENT</p>
    </div>

    <div className='success-body'>
      <span className='success'>Success!</span>
      <img className='success-img' src={Success} alt="" />
      <span className='your-account-passwor'>Your account password has been successfully changed.</span>
      <span className='please-login-to-inte'>Please Login to Intern Management with your new password.</span>
      <button className='button-IM'><p>Continue to Login</p></button>
    </div>
  </div>
  
  )
}

export default SuccessPassword
