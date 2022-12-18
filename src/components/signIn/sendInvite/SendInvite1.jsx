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
                    <span style={{color:"white"}} className="renuka-shetty">
                    Renuka Shetty
                      <i style={{color:"white"}} class="arrow down"></i>
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
      
        <div className="name-birth-div-siv">
        <div className="input-container-siv">
          <span className="input-name-siv">Name</span>
          <input
            autofocus="false"
            placeholder="Candidate Name"
            type="text"
            className="input-siv"
          />
        </div>
        <div className="input-container-siv">
          <span className="input-name-siv">Desgnation</span>
          <input
            autofocus="false"
            placeholder="Enter his/her Designation"
            type="text"
            className="input-siv"
          />
        </div>
      </div>


      <div style={{marginTop:"22px"}} className="name-birth-div-siv">
        <div className="input-container-siv">
          <span className="input-name-siv">Mobile Number</span>
          <input
            autofocus="false"
            placeholder="Enter Candidate Mobile Number"
            type="text"
            className="input-siv"
          />
        </div>
        <div className="input-container-siv">
          <span className="input-name-siv">Location</span>
          <input
            autofocus="false"
            placeholder="Enter Job Location"
            type="text"
            className="input-siv"
          />
        </div>
      </div>
      
      <div  style={{marginTop:"22px"}} className='name-birth-div-siv'>
        <div className='div-row-to-col'>
      <span className="input-name-siv">Job Detail</span>
      <textarea  autofocus="false"
            placeholder="Enter Job Details here"
            type="text"
            style={{height:"100px",padding:"0.5rem"}}
            className="input-siv"  />
            </div>

      </div>
      <div style={{marginTop:"22px"}} className="name-birth-div-siv">
        <div className="input-container-siv">
          <span className="input-name-siv">Email ID</span>
          <input 
            autofocus="false"
            placeholder="Candidate Email ID "
            type="text"
            className="input-siv"
          />
        </div>
        <div className="input-container-siv">
          <span style={{color:"#121432"}} className="input-name-siv">.</span>
          <div className="SignUp-buttonField">
              <button className="SignUp-button-IM">
                <p>Send Invite</p>
              </button>
            </div>
        </div>
      </div>





      </div>
    
    </div>
  )
}

export default SendInvite1
