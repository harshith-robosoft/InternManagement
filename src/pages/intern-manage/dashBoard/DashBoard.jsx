import React from "react";
import "./DashBoard.css";
import logo from "../../../assets/images/img_Robosoft logo_dashboard.png";
import home from "../../../assets/images/icn_dashboard_selected.png";
import search from "../../../assets/images/icn_recruitment.png";
import assign from "../../../assets/images/icn_assign.png";
import pen from "../../../assets/images/icn_register.png"
import card from "../../../assets/images/img_cvanalysis.png"
const DashBoard = () => {
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
              <span className="dash-name">CV Analysis</span>
            </div>
          </div>
          <div className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={assign} alt="" />
              <span className="dash-name">Assign Board</span>
            </div>
          </div>
        </div>

        <div className="dash-page">
           <div className="dash-page-L">
            <div className="dash-header-L">
           <span className="dashboard-name-L">Dashboard</span>
           <div className="reg-date-div">
           <div className="register-btn-L">
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

           </div>
           </div>
        </div>
        
      </div>
    </>
  );
};

export default DashBoard;
