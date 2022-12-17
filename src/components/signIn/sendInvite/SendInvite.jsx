import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNav from "../sideNavBar/SideNav";
import "./SendInvite.css";
import SendInvite1 from "./SendInvite1";
import SendInvite2 from "./SendInvite2";
import SendInvite3 from "./SendInvite3";
import { Route, Routes } from "react-router-dom";

const SendInvite = () => {
  const navigate = useNavigate();

  const [shownavback, setshownavback] = useState(false);

  const handlebackcolor = () => {
    setshownavback(true);
  };

  let today = new Date();
  let dd = today.getDate();
  let yyyy = today.getFullYear();
  Date.prototype.getMonthName = function () {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "Dec",
    ];
    return monthNames[this.getMonth()];
  };
  var month_Name = new Date().getMonthName();
  return (
    <>
      <div className="outer-black">
        <SideNav />
        <div
          className="navbar-container-color"
          style={{
            height: "100vh",
            background: shownavback
              ? "linear-gradient(90deg, #121432 50%, #f6f9fd 50%)"
              : "#121432",
            position: "relative",

            width: "22%",
            zIndex: 0,
          }}
        >
          <div className="nav-si">
            <span className="invite">Invite</span>
            <div className="border-bottom"></div>

            <div className="route">
              <div
                className="route-container"
                onClick={() => {
                  setshownavback(false);
                  navigate("/invite");
                }}
              >
                {" "}
               
               <span className="nav-bar-si-font">Invite candidates</span> 
              </div>
              <div
                className="route-container"
                onClick={() => {
                  handlebackcolor();
                  navigate("/invite/sendinvite2");
                }}
              > <div style={{display:"flex",flexDirection:"column"}}>
                <span className="nav-bar-si-font">Today ({dd} {month_Name} {yyyy})</span> 
                <span className="nav-bar-si-font-mini">09 invited</span>
              </div>
                
              
              </div>
              <div
                className="route-container"
                onClick={() => {
                  handlebackcolor();
                  navigate("/invite/sendinvite3");
                }}
              >
                <div style={{display:"flex",flexDirection:"column"}}>
                <span className="nav-bar-si-font">Yesterday</span> 
                <span className="nav-bar-si-font-mini">09 invited</span>
              </div>
              </div>
              {/* <div className="route-container"> 1 month back</div>
              <div className="route-container"> 2 month</div>
              <div className="route-container"> 3 month</div> */}
              {/* <div className='route-container' > invite candidate</div> */}
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<SendInvite1 />}></Route>
          <Route path="/sendinvite2" element={<SendInvite2 />}></Route>
          <Route path="/sendinvite3" element={<SendInvite3 />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default SendInvite;
