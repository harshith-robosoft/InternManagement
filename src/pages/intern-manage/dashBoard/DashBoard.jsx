import React from "react";
import "./DashBoard.css";
import logo from "../../../assets/images/img_Robosoft logo_dashboard.png";
import home from "../../../assets/images/icn_dashboard_selected.png";
import search from "../../../assets/images/icn_recruitment.png";
import assign from "../../../assets/images/icn_assign.png";
import pen from "../../../assets/images/icn_register.png"
import card from "../../../assets/images/img_cvanalysis.png";
import mail from "../../../assets/images/icn_invite.png";
import profile from "../../../assets/images/icn_hr.png";
import sms from "../../../assets/images/icn_applicants.png";
import person from "../../../assets/images/icn_shortlisted.png"
import timer from "../../../assets/images/icn_hold.png";
import rightArrow from "../../../assets/images/icn_viewall.png"
import dele from "../../../assets/images/icn_rejected.png";
import orgprofile from "../../../assets/images/icn_raksha.png";
import del from "../../../assets/images/icn_rejected2.png"
import invite from "../../../assets/images/icn_invite1.png"
import notify from "../../../assets/images/icn_notification.png";
import settings from "../../../assets/images/icn_settings.png";
import logout from "../../../assets/images/icn_logout.png"
import { useNavigate } from "react-router-dom";
const DashBoard = () => {
  const navigate= useNavigate()
  return (
    <>
      <div className="outer-body">
        <div className="nav-bar">
          <img className="dash-logo" src={logo} alt="" />
          <span className="intern-management">Intern Management</span>
          <div className="dashboard-div">
            <div className="rectangle-copy-8 "></div>
            <div className="dash-home">
              <img className="home-logo" src={home} alt="" />
              <span className="dash-name">Dashboard</span>
            </div>
          </div>
          <div className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={search} alt="" />
              <span className="assign-board">CV Analysis</span>
            </div>
          </div>
          <div onClick={()=>{
            navigate("/assignboard")
          }} className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={assign} alt="" />
              <span className="assign-board">AssignBoard</span>
            </div>
          </div>

          <div className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={del} alt="" />
              <span className="assign-board">&nbsp;Rejected CV</span>
            </div>
          </div>

          <div className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={invite} alt="" />
              <span className="assign-board">&nbsp;&nbsp;&nbsp;&nbsp;Invite&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div>

          <div className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={notify} alt="" />
              <span className="assign-board">Notification</span>
            </div>
          </div>

          <div className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={settings} alt="" />
              <span className="assign-board">&nbsp;&nbsp;Settings&nbsp;&nbsp;</span>
            </div>
          </div>
          <div className="cv-div">
            <div className="logout-cv">
              <img className="home-logo" src={logout} alt="" />
              <span className="assign-board">&nbsp;&nbsp;Logout&nbsp;&nbsp;</span>
            </div>
          </div>
        </div>

        <div className="dash-page">
           <div className="dash-page-L">
            <div className="dash-header-L">
           <span className="dashboard-name-L">Dashboard</span>
           <div className="reg-date-div">
           <div onClick={()=>{
            navigate("/Registerpg1")
           }} className="register-btn-L">
                        <span>Register</span>
                        <img className="home-logo" src={pen} alt="" />
                    </div>
                    <div className="date">
                    <p> Date: &nbsp;</p> <span> 2020, March 04</span>
                    </div>
           </div>
           </div>
           <div className="welcome">
            <div className="welcome-L">
            <span className="welcome-back-renuka ">Welcome Back, Renuka !</span>
            <span className="you-have-36-new-cv-t">You have <span>36</span> new CV to Analysis.</span>
            <button className="check-btn"><p>Check Now</p></button>
            </div>
          
            <img className="card-img" src={card} alt="" />
       
           </div>
           <div className="cv-graph-div"></div>
           <span className="cv">CV Analysis</span>
           <div className="graph-cv">
                ngcbcbcg
           </div>
         
           <div className="invite-div">
                <div className="invite-l">
                <span className="invite-candidate">Invite Candidate</span>
                <span className="send-invite-by-email">Send invite by email address</span>
                </div>
                <div> 
                  <div className="invite-btn-L">
                        <span>Invite</span>
                        <img className="icn-invite" src={mail} alt="" />
                  </div>
                    </div>
           </div>
           </div>
           <div className="dash-page-R">
            <div className="dash-header-R">
              <div className="profile-l">
                <span className="hello">Hello</span>
                <span className="renuka-shetty">Renuka Shetty  <i class="arrow down"></i></span>
                <p>Recruiter</p>
              </div>

              <div className="profile-pic-div"><img src={profile} alt="" /></div>
                
            </div>
            <span className="summary-march ">Summary(March)</span>
            <div className="summary-box">
                <div className="sms-box">
                  <div>
                  <img src={sms} alt="pic" />
                  </div>
                  <div className="app-no">
                   <span className="no" >60</span>
                   <span className="applications ">Applications</span>
                   </div>
                </div>

                <div className="sms-box-2">
                  <div>
                  <img src={person} alt="pic" />
                  </div>
                  <div style={{marginRight:"10px"}} className="app-no">
                   <span className="no" >60</span>
                   <span className="applications ">Shortlisted</span>
                   </div>
                </div>

                <div className="sms-box-2">
                  <div>
                  <img src={timer} alt="pic" />
                  </div>
                  <div style={{marginRight:"28px"}} className="app-no">
                   <span className="no" >60</span>
                   <span className="applications ">On hold</span>
                   </div>
                </div>

                <div className="sms-box-2">
                  <div>
                  <img src={dele} alt="pic" />
                  </div>
                  <div style={{marginRight:"23px"}} className="app-no">
                   <span className="no">60</span>
                   <span className="applications ">Rejected</span>
                   </div>
                </div>
            </div>
              <div className="notify-div">
            <span className="notification ">Notification</span>
            <div className="viewall">
              <span className="view-all">View All </span>
              <img className="icn-viewall" src={rightArrow} alt="" />
            </div>
            </div>
            <div className="notify-box">
              <span className="campus-interview-at">Campus Interview at Nitte Institution</span>
              <span className="notify-time">7 Mar, 2020  |  10:00 AM</span>
              <img className="oval" src={orgprofile} alt="" />             
            </div>
            <span className="notification" style={{marginLeft:"32px", marginTop:"1.5rem"}}>Organizers</span>
            <div className="organise-box">
              <div className="org-prof-name">
              <img className="org-prof-img-size" src={orgprofile} alt="" />
              <span className="raksha">Raksha</span>
              <span  className="interviews">10 interview</span>
              </div>
              <div className="org-prof-name">
              <img className="org-prof-img-size" src={orgprofile} alt="" />
              <span className="raksha">Raksha</span>
              <span  className="interviews">10 interview</span>
              </div>
              <div className="org-prof-name">
              <img className="org-prof-img-size" src={orgprofile} alt="" />
              <span className="raksha">Raksha</span>
              <span  className="interviews">10 interview</span>
              </div>
              <div className="org-prof-name">
              <img className="org-prof-img-size" src={orgprofile} alt="" />
              <span className="raksha">Raksha</span>
              <span  className="interviews">10 interview</span>
              </div>
             
            </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
