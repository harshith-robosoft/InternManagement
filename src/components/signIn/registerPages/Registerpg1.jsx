import React from 'react'
import "./Registerpg.css"
const Registerpg1 = () => {
  return (
    <div className='registerpg1-container'>
      <div className='name-birth-div'>

      <div className="input-container">
          <span className="input-name">Full Name</span>
          <input
            placeholder="Your Good Name"
            type="text"
            className="input"
          />
        </div>

        <div className="input-container">
          <span className="input-name">Date of Birth</span>
          <input
            placeholder="(DD/MM/YYYY)"
            type="date"
            className="input"
            style={{color:"#C1BEBE"}}
          />
        </div>

      </div>

      <div className='number-email-div'>

      <div className="input-container">
          <span className="input-name">Mobile Number</span>
          <input
            placeholder="Your Mobile Number"
            type="number"
            className="input"
          />
        </div>

        <div className="input-container">
          <span className="input-name">Email ID</span>
          <input
            placeholder="Your Mail ID"
            type="email"
            className="input"
          />
        </div>

      </div>
    </div>
  )
}

export default Registerpg1
