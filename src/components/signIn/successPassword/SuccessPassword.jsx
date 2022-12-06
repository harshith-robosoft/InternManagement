import React from 'react'
import "./SuccessPassword.css"
import Success from "../../../assets/images/img_success_illustration.png"
const SuccessPassword = () => {
  return (
    <div className='success-body'>
      <span className='success'>Success!</span>
      <img className='success-img' src={Success} alt="" />
      <span className='your-account-passwor'>Your account password has been successfully changed.</span>
      <span className='please-login-to-inte'>Please Login to Intern Management with your new password.</span>
      <button className='button-IM'><p>Continue to Login</p></button>
    </div>
  )
}

export default SuccessPassword
