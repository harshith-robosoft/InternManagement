import React from 'react'
import "./SendInvite.css"
import orgprofile from "../../../assets/images/icn_raksha.png";
import manInvite from "../../../assets/images/img_sendinvite_illustration-2.png"
const SendInvite1 = () => {
  return (
    <div className='right-si-main'>
      <div className='header-si-1'>
      <span className='send-invite-font'>Send Invite</span>
      <div className="R-profile-div">
                <div className="dash-header-R-si">
                  <div className="profile-l-ab">
                    {/* <span className="hello">Hello</span> */}
                    <span className="renuka-shetty">
                    Renuka Shetty
                      <i class="arrow down"></i>
                    </span>
                    <p>Recruiter</p>
                  </div>
                  <div className="profile-pic-div-ab">
                    <img
                      className="profile-photo-ab"
                      src={orgprofile}
                      alt="pic"
                    />
                  </div>
                </div>
              </div>
      </div>
      <div  className='border-bottom-si-1'></div>
      <div className='invite-illustartion'>
      <img  src={manInvite} alt="" />
      </div>
      <div className='form-div-si-1'>

      </div>
    
    </div>
  )
}

export default SendInvite1
