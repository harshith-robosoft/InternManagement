import React, { useState } from "react";
import "./SideNav.css";
import logo from "../../../assets/images/img_Robosoft logo_dashboard.png";
import home from "../../../assets/images/icn_dashboard_selected.png";
import search from "../../../assets/images/icn_recruitment.png";
import assign from "../../../assets/images/icn_assign.png";
import pen from "../../../assets/images/icn_register.png";
import card from "../../../assets/images/img_cvanalysis.png";
import mail from "../../../assets/images/icn_invite.png";
import profile from "../../../assets/images/icn_hr.png";
import sms from "../../../assets/images/icn_applicants.png";
import person from "../../../assets/images/icn_shortlisted.png";
import timer from "../../../assets/images/icn_hold.png";
import rightArrow from "../../../assets/images/icn_viewall.png";
import dele from "../../../assets/images/icn_rejected.png";
import orgprofile from "../../../assets/images/icn_raksha.png";
import del from "../../../assets/images/icn_rejected2.png";
import invite from "../../../assets/images/icn_invite1.png";
import notify from "../../../assets/images/icn_notification.png";
import settings from "../../../assets/images/icn_settings.png";
import logout from "../../../assets/images/icn_logout.png";
import { NavLink, useNavigate } from "react-router-dom";
import robologo from "../../../assets/images/img_robosoftlogo.png";
import DashBoard from "../../../pages/intern-manage/dashBoard/DashBoard";
import Assignboard from "../assignBoard/Assignboard";
const SideNav = () => {
  const [displayassign, setDisplayassign] = useState(false);
  const [alignMargin, setalignMargin] = useState(false);
  const navigate = useNavigate();
  function deleteItems() {
    // Clear localStorage items 
    sessionStorage.clear()
  }
  return (
    <>
      <div
        className="nav-bar-sn"
        onMouseEnter={() => {
          setDisplayassign(!displayassign);
          setalignMargin(true);
        }}
        onMouseLeave={() => {
          setDisplayassign(!displayassign);
          setalignMargin(false);
        }}
      >
        <img
          style={{ display: displayassign ? "none" : "block" }}
          className="img-robosoftlogo-sn"
          src={robologo}
          alt="pic"
        />
        <img
          style={{ display: displayassign ? "block" : "none" }}
          className="dash-logo-sn"
          src={logo}
          alt=""
        />
        <span
          style={{ display: displayassign ? "block" : "none" }}
          className="intern-management-sn"
        >
          Intern Management
        </span>

        <NavLink to="/dashboard">
          <div
            //   onClick={() => {
            //     navigate("/dashboard");
            //   }}
            style={{ marginTop: alignMargin ? "50px" : "78px" }}
            className="cv-div-sn"
          >
            <div
              className="search-cv-sn"
              style={{ marginLeft: alignMargin ? "10%" : "0%" }}
            >
              <img className="home-logo-sn" src={home} alt="" />
              <span
                className="assign-board-sn"
                style={{ display: displayassign ? "block" : "none" }}
              >
                Dashboard
              </span>
            </div>
          </div>
        </NavLink>
        <div className="cv-div-sn">
          <NavLink to="/cvAnalysis" className="search-cv-sn"
            style={{ marginLeft: alignMargin ? "10%" : "0%" }}
          >
            <img className="home-logo" src={search} alt="" />
            <span
              className="assign-board-sn"
              style={{ display: displayassign ? "block" : "none" }}
            >
              CV Analysis
            </span>
          </NavLink>
        </div>

        <div className="cv-div-sn">
          {/* <NavLink  to="/assignboard"> */}
          <NavLink to="/assignboard"
            className="search-cv-sn"
            style={{ marginLeft: alignMargin ? "10%" : "0%" }}
          >
            <img className="home-logo-sn" src={assign} alt="" />
            <span
              className="assign-board-sn"
              style={{ display: displayassign ? "block" : "none" }}
            >
              AssignBoard
            </span>
          </NavLink>
          {/* </NavLink> */}
        </div>


        <div className="cv-div-sn">
          <NavLink to="/RejectedCV" className="search-cv-sn"
            style={{ marginLeft: alignMargin ? "10%" : "0%" }}
          >
            <img className="home-logo-sn" src={del} alt="" />
            <span
              className="assign-board-sn"
              style={{ display: displayassign ? "block" : "none" }}
            >
              Rejected CV
            </span>
          </NavLink>
        </div>

        <div className="cv-div-sn">
          <NavLink to="/invite"
            className="search-cv-sn"
            style={{ marginLeft: alignMargin ? "10%" : "0%" }}
          >
            <img className="home-logo-sn" src={invite} alt="" />
            <span
              className="assign-board-sn"
              style={{ display: displayassign ? "block" : "none" }}
            >
              Invite
            </span>
          </NavLink>
        </div>

        <div className="cv-div-sn">
          <NavLink to="/notification"
            className="search-cv-sn"
            style={{ marginLeft: alignMargin ? "10%" : "0%" }}
          >
            <img className="home-logo-sn" src={notify} alt="" />
            <span
              className="assign-board-sn"
              style={{ display: displayassign ? "block" : "none" }}
            >
              Notification
            </span>
          </NavLink>
        </div>

        <div className="cv-div-sn">
          <div
            className="search-cv-sn"
            style={{ marginLeft: alignMargin ? "10%" : "0%" }}
          >
            <img className="home-logo-sn" src={settings} alt="" />
            <span
              className="assign-board-sn"
              style={{ display: displayassign ? "block" : "none" }}
            >
              Settings
            </span>
          </div>
        </div>
        <div
          className="cv-div-sn"
          style={{ marginLeft: alignMargin ? "10%" : "0%" }}
        >

          <div onClick={() => {
            deleteItems()
            navigate("/")
          }} className="logout-cv-sn">
            <img className="home-logo-sn" src={logout} alt="" />
            <span
              className="assign-board-sn"
              style={{ display: displayassign ? "block" : "none" }}
            >
              Logout
            </span>
          </div>

        </div>
      </div>
    </>
  );
};

export default SideNav;
