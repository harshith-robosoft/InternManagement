import React, { useState,useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SideNav from "../sideNavBar/SideNav";
import "./SendInvite.css";
import SendInvite1 from "./SendInvite1";
import SendInvite2 from "./SendInvite2";
import SendInvite3 from "./SendInvite3";
import { Route, Routes } from "react-router-dom";
import SendInvite4 from "./SendInvite4";
import SendInvite5 from "./SendInvite5";
import { inviteCount } from "../../../services/SendInvite";
import axios from "axios";
import SendInvite6 from "./SendInvite6";

const SendInvite = () => {
  const navigate = useNavigate();

  const [shownavback, setshownavback] = useState(false);
  const [invCount,setInvCount]= useState("")
  const handlebackcolor = () => {
    setshownavback(true);
  };

  let today = new Date();
  let dd = today.getDate();
  let yyyy = today.getFullYear();
  let mm= today.getMonth()
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


  
  useEffect(() => {
    const sendInviteInfo = async () => {
      let response = await axios
        .all([inviteCount()])
        .then(
          axios.spread((...responses) => {
            const inviteCountData = responses[0];
            // const profileData = responses[1];
            // const pageData = responses[1];
            // const orgData = responses[2];


            // setpage(pageData);
            // setOrg(orgData);
            setInvCount(inviteCountData)
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    };
    sendInviteInfo();
  }, []);
  console.log("number count",invCount);
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
              <div className="nav-l">
              <NavLink to="/invite" 
                className="route-container"
                onClick={() => {
                  setshownavback(false);
                  // navigate("/invite");
                }}
              >
                {" "} 
               
               <span className="nav-bar-si-font">Invite candidates</span> 
              </NavLink>
              </div>
              <div className="nav-l">
              <NavLink to="/invite/sendinvite2"
                className="route-container"
                onClick={() => {
                  handlebackcolor();
                  // navigate("/invite/sendinvite2");
                }}
              > <div style={{display:"flex",flexDirection:"column"}}>
                <span className="nav-bar-si-font">Today ({dd} {month_Name} {yyyy})</span> 
                <span className="nav-bar-si-font-mini">{invCount?.data?.info?.today} invited</span>
              </div>
                
              
              </NavLink>
              </div>
              <div className="nav-l">
              <NavLink to="/invite/sendinvite3"
                className="route-container"
                onClick={() => {
                  handlebackcolor();
                  // navigate("/invite/sendinvite3");
                }}
              >
                <div style={{display:"flex",flexDirection:"column"}}>
                <span className="nav-bar-si-font">Yesterday</span> 
                <span className="nav-bar-si-font-mini">{invCount?.data?.info?.yesterday} invited</span>
              </div>
              </NavLink>
              </div>

              <div className="nav-l">
              <NavLink to="/invite/sendinvite4"
                className="route-container"
                onClick={() => {
                  handlebackcolor();
                  // navigate("/invite/sendinvite3");
                }}
              >
                <div style={{display:"flex",flexDirection:"column"}}>
                <span className="nav-bar-si-font">Past One Month</span> 
                <span className="nav-bar-si-font-mini">{invCount?.data?.info?.pastMonth} invited</span>
              </div>
              </NavLink>
              </div>

              <div className="nav-l">
              <NavLink to="/invite/sendinvite5"
                className="route-container"
                onClick={() => {
                  handlebackcolor();
                  // navigate("/invite/sendinvite3");
                }}
              >
                <div style={{display:"flex",flexDirection:"column"}}>
                <span className="nav-bar-si-font">October</span> 
                <span className="nav-bar-si-font-mini">{invCount?.data?.info?.twoMonthBack} invited</span>
              </div>
              </NavLink>
              </div>

              <div className="nav-l">
              <NavLink to="/invite/sendinvite6"
                className="route-container"
                onClick={() => {
                  handlebackcolor();
                  // navigate("/invite/sendinvite3");
                }}
              >
                <div style={{display:"flex",flexDirection:"column"}}>
                <span className="nav-bar-si-font">2021</span> 
                <span className="nav-bar-si-font-mini">{invCount?.data?.info?.pastYear} invited</span>
              </div>
              </NavLink>
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
          <Route path="/sendinvite4" element={<SendInvite4/>}></Route>
          <Route path="/sendinvite5" element={<SendInvite5/>}></Route>
          <Route path="/sendinvite6" element={<SendInvite6/>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default SendInvite;
