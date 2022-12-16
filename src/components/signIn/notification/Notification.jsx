import React, { useState } from "react";
import SideNav from "../sideNavBar/SideNav";
import "./Notification.css";
import searchIcon from "../../../assets/images/icn_search.png";
import Switch from "react-switch";
import addProfile from "../../../assets/images/add_member.png";
import timeicn from "../../../assets/images/icn_notificationtime.png";
import profileMember from "../../../assets/images/icn_member_placeholder.png";
import deleteMember from "../../../assets/images/icn_delete member.png";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const Notification = () => {
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

  const [checked, setChecked] = useState(true);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  

  return (
    <>
      <div className="outer-black">
        <SideNav />
        <div className="noti-main-page">
          <div className="noti-R-main-page">
            <div className="noti-header">
              <div className="notifi-div">
                <span className="notifications">Notifications</span>
                {/* switch */}
                <Switch
                  onChange={handleChange}
                  uncheckedIcon={""}
                  checkedIcon={""}
                  onColor="#F52851"
                  offHandleColor="#F52851"
                  checked={checked}
                  className="react-switch"
                />
              </div>
              <div className="search-date-div">
                <div style={{marginRight: "5px"}} className="search-icn-outer-red">
                  <img  className="search-icn-red" src={searchIcon} alt="pic" />
                </div>
                {/* <div className="search-box">
                <div style={{marginTop: "1px"}} className="search-img-outer-red">
                  <img className="search-icn-red" src={searchIcon} alt="pic" />
                </div>
                  <input
                    placeholder="Search"
                    className="input-ab"
                    type="text"
                    style={{marginTop: "1px"}}
                  />
              </div> */}
                <div className="date">
                  <p> Date: &nbsp;</p>{" "}
                  <span>
                    {" "}
                    {yyyy}, {month_Name} {dd}
                  </span>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="notification-body">
              <div className="notification-div">
                <div className="data-remove-div">
                  <span className="notifi-text-data">
                    {/* <p style={{fontWeight:"bold"}} className="notifi-text-data">Remider</p> */}
                    Nisha invited you to Join a Event Trainee Walkins in
                    Robosoft Technologies on 2020, May 10. Would you like to
                    join this Event?
                  </span>

                  <div   id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} className="remove-noti">•••</div>
          
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}> <p className="remove-noti">Remove This Notification</p> </MenuItem>
       
      </Menu>

                
                </div>
                <div className="join-decline-btn-div">
                  <button className="join-btn">
                    <p className="join">Join</p>
                  </button>
                  <button className="decline-btn">
                    <p style={{ color: "red" }} className="join">
                      Decline
                    </p>
                  </button>
                </div>
                <div className="time-date-div">
                  <img
                    style={{
                      height: "10px",
                      marginTop: "5px",
                      marginRight: "3px",
                      width: "10px",
                    }}
                    src={timeicn}
                    alt=""
                  />
                  <span className="time-day-words">Yesterday at 10:00am</span>
                </div>
              </div>

              
           
            </div>
          </div>
          <div className="noti-Rpage">
            <div className="noti-header-R">
              <div className="profile-l">
                <span className="hello">Hello</span>
                <span className="renuka-shetty">
                  renuka-shetty <i class="arrow down"></i>
                </span>
                <p>Recruiter</p>
              </div>

              <div className="profile-pic-div">
                <img className="profile-pic-size" src={timeicn} alt="" />
              </div>
            </div>
            <p
              style={{ marginTop: "60px", marginLeft: "30px" }}
              className="notifications"
            >
              Create Event
            </p>
            <form action="">
              <div className="form-data-noti">
                <div
                  style={{ marginTop: "30px" }}
                  className="input-container-noti"
                >
                  <span className="input-name-noti">Event Title</span>
                  <input
                    placeholder="Your Mobile Number"
                    type="number"
                    className="input-noti"
                  />
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="input-container-noti"
                >
                  <span className="input-name-noti">Institution Name</span>
                  <input
                    placeholder="Name of Institution"
                    type="number"
                    className="input-noti"
                  />
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="input-container-noti"
                >
                  <span className="input-name-noti">Location</span>
                  <input
                    placeholder="Enter Institute Location"
                    type="number"
                    className="input-noti"
                  />
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="date-time-div-input"
                >
                  <div className="date-noti">
                    <span className="input-name-noti">Date</span>
                    <input type="date" className="date-inp-noti" />
                  </div>

                  <div className="time-noti">
                    <span
                      style={{ marginLeft: "25px" }}
                      className="input-name-noti"
                    >
                      Time
                    </span>
                    <div className="row-date-time">
                      <select className="time-drop">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                      </select>
                      <select className="time-drop">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="textarea-container-noti">
                  <span className="input-name-noti">Description</span>
                  <textarea
                    placeholder="Notes"
                    type="number"
                    className="input-noti"
                  />
                </div>

                <span
                  style={{ marginTop: "20px", marginLeft: "-302px" }}
                  className="input-name-noti"
                >
                  Members
                </span>
              </div>
              <div className="profiles">
                <div className="profileAdd-loop">
                    <div className="profile-x-mark-whole">
                  <img
                    style={{
                      height: "60px",
                      width: "60px",
                    
                      position:"absolute"
                    }}
                    src={profileMember}
                    alt=""
                  />
                  <img style={{position:"relative",marginTop: "39px",
    marginLeft: "38px", marginRight: "8px"}} src={deleteMember} alt="" />
                  </div>
                
                  
                  {/* <img
                    style={{
                      height: "60px",
                      width: "60px",
                      marginRight: "8px",
                      marginBottom: "2px",
                    }}
                    src={profileMember}
                    alt=""
                  />
                  <img
                    style={{
                      height: "60px",
                      width: "60px",
                      marginRight: "8px",
                      marginBottom: "2px",
                    }}
                    src={profileMember}
                    alt=""
                  /> */}

                  <img
                    style={{ height: "60px", width: "60px" }}
                    src={addProfile}
                    alt=""
                  />
                </div>
              </div>

              <div className="clear-create-btn-div">
                <button className="decline-btn">
                  <p style={{ color: "red" }} className="join">
                    Clear
                  </p>
                </button>
                <button className="join-btn">
                  <p className="join">Create</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
