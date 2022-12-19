import React from 'react'
import searchIcon from "../../../assets/images/icn_search.png";
import orgprofile from "../../../assets/images/icn_raksha.png";
import locationicn from "../../../assets/images/icn_location_sentinvite.png";
import emailicn from "../../../assets/images/icn_email_sentinvite.png";

const SendInvite3 = () => {
  return (
    <div className="right-si-main-2">
      <div className="header-si-2">
        <span style={{ color: "black" }} className="send-invite-font">
          Sent Invite
        </span>
        <div className="r-invite-search-name-div">
          <div className="search-box">
            <div style={{ marginTop: "1px" }} className="search-img-outer-red">
              <img className="search-icn-red" src={searchIcon} alt="pic" />
            </div>
            <input
              placeholder="Search"
              className="input-ab"
              type="text"
              style={{ marginTop: "1px" }}
            />
          </div>

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
                <img className="profile-photo-ab" src={orgprofile} alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom-si-1"></div>

      <div className="cards-body">
        <div className="card-box">
          <div className="card-head">
            <span className="nav-bar-si-font">Kaushi kumar</span>
            <span className="nav-bar-si-font-mini">PRoduct manager</span>
          </div>
          <div className="border-bottom-card-head"></div>
          <div className="icn-name-div">
            <img
              style={{ height: "15px", width: "11px",marginTop:"2px" }}
              src={locationicn}
              alt=""
            />
            <span style={{ marginLeft: "20px" }} className="bangalore-font">
              Banglore
            </span>
          </div>
          <div className="icn-name-div">
            <img
              style={{ height: "9.36px", width: "14.4px",marginTop:"5px" }}
              src={emailicn}
              alt=""
            />
            <span style={{ marginLeft: "20px" }} className="bangalore-font">
              Banglore
            </span>
          </div>
         <div className='btn-div-resend'>
         <button className='resend-invite-btn'> 
        <p> Resend Invite</p> </button>
         </div>
         
         
        </div>


       
      </div>
    </div>
  )
}

export default SendInvite3
