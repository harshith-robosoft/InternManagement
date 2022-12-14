import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { requestFive } from "../../../services/dashRect";
const DashOrg = () => {
  const navigate= useNavigate()

  const [profiled,setProfiled] = useState("")
  const gettokendata = sessionStorage.getItem("auth");
  useEffect(() => {
    const getCv = async () => {
      let response = await axios
        .all([requestFive()])
        .then(
          axios.spread((...responses) => {
            // const cvCount = responses[0];
            // const notification = responses[1];
            // const organizer = responses[2];
            // const summaryData = responses[3];
            const profileData = responses[0];
            // const responseTwo = responses[1];
            // const responesThree = responses[2];
            // use/access the results
       
            setProfiled(profileData)
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    };

    getCv(gettokendata);
  }, []);
  console.log("profiledata=======", profiled);
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
          {/* <div className="cv-div">
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
          </div> */}

          {/* <div className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={del} alt="" />
              <span className="assign-board">&nbsp;Rejected CV</span>
            </div>
          </div> */}

          {/* <div className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={invite} alt="" />
              <span className="assign-board">&nbsp;&nbsp;&nbsp;&nbsp;Invite&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
          </div> */}

          {/* <div className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={notify} alt="" />
              <span className="assign-board">Notification</span>
            </div>
          </div> */}

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

        <div className="dash-page-org">
          <div className="head-org">
          <span style={{color:"white"}} className="dash-name-org">.</span>
          <span className="welcome-back-renuka ">Welcome Back, Organizer !</span>
            <div className="dash-header-R-org">
              <div className="profile-l">
                <span className="hello">Hello</span>
                <span className="renuka-shetty">{profiled.data?.info?.name} <i class="arrow down"></i></span>
                <p>Organizer</p>
              </div>

              <div className="profile-pic-div"><img className="profile-pic-size" src={profiled?.data?.info?.profileImage} alt="" /></div>     
            </div>
            </div>

            
          <div className="main-white-body-org">
            <div className="Head-col-body-org">
              <span className="Name-head-org">Name</span>
              <span className="desig-head-org">Designation</span>
              <span className="desig-head-org">Status</span>
              {/* <span className="desig-head-org">Assigned Date</span>
              <span className="desig-head-org">Organizer</span> */}
            </div>

            <table className="row-data-org">
              <div className="row-col-body-org">
                <span className="Name-row-org">Name</span>
                <span className="nithin-anand-org">Designavdstion</span>
                <span className="nithin-anand-org">
                <button>shortlisted</button> <button>Rejected</button>
                </span>
                {/* <span className="nithin-anand-org">Designatvxvdxxion</span>
                <span className="nithin-anand-org">
                  Designativfvfdon
                  <div class="dropdown">
                    <i class="arrow down"></i>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </span> */}
              </div>
            </table>

          </div>

            
          
        </div>
      </div>
    </>
  );
};

export default DashOrg;
