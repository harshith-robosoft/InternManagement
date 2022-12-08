import React from 'react'
import "./Registration.css"
import logo from "../../../assets/images/img_Robosoft logo_registration.png"
import Registerpg1 from '../../../components/signIn/registerPages/Registerpg1'

const Registration = () => {
  return (
    <div className='registration-container'>
        <div className='logo'>
      <img  src= {logo} alt="" />
      </div>
      <div className='welcome-detail'>
        <span> Welcome to Robosoft!</span>
        <p>Enter your Details here</p>
      </div>

          {/* <Registerpg1/> */}

    </div>
  )
}

export default Registration
