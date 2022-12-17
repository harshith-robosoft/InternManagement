import React, { useEffect, useState } from "react";
import SideNav from "../sideNavBar/SideNav";
import "./Notification.css";
import searchIcon from "../../../assets/images/icn_search.png";
import Switch from "react-switch";
import addProfile from "../../../assets/images/add_member.png";
import timeicn from "../../../assets/images/icn_notificationtime.png";
import profileMember from "../../../assets/images/icn_member_placeholder.png";
import deleteMember from "../../../assets/images/icn_delete member.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  notificationData,
  profileInfoN,
} from "../../../services/Notifications";
import axios from "axios";
import moment from "moment";
const Notification = () => {
  const [notifiData, setNotifiData] = useState("");
  const [profiled, setProfiled] = useState("");

  const [visible, setVisible] = useState(true);

  function showSearch() {
    document.getElementById('welcomeDiv').style.display = "block";
 }
 function hideSearch() {
    document.getElementById('hideDiv').style.display = "none";
 }

  const removeElement = () => {
    setVisible((prev) => !prev);
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


  
  const [checked, setChecked] = useState(true);
  const[state,setState] = useState(false)
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    document.getElementById('notiDiv').style.display = "none"
    // setState(document.getElementById('notiDiv').style.display = "none")
  };



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const notificationInfo = async () => {
      let response = await axios
        .all([notificationData(), profileInfoN()])
        .then(
          axios.spread((...responses) => {
            const notifyData = responses[0];
            const profileData = responses[1];
            // const pageData = responses[1];
            // const orgData = responses[2];

            // const notification = responses[1];
            // const organizer = responses[2];
            // const summaryData = responses[3];
            // const profileData = responses[4];

            // setpage(pageData);
            // setOrg(orgData);
            setNotifiData(notifyData);
            setProfiled(profileData);
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    };
    notificationInfo();
  }, []);

  console.log("notifications ====", notifiData?.data?.info);
  console.log("prof", profiled);

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
              <div  className="search-date-div">
                <div id="hideDiv" onClick={()=>{
                    showSearch()
                    hideSearch()
                }}
                  style={{ marginRight: "5px" }}
                  className="search-icn-outer-red"
                >
                  <img className="search-icn-red" src={searchIcon} alt="pic" />
                </div>
                <div id="welcomeDiv"  style={{display:"none"}}  className="search-box">
                <div style={{marginTop: "1px"}} className="search-img-outer-red">
                  <img className="search-icn-red" src={searchIcon} alt="pic" />
                </div>
                  <input
                    placeholder="Search"
                    className="input-ab"
                    type="text"
                    style={{marginTop: "1px"}}
                  />
              </div>
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
            <div id="notiDiv"  style={{display:"block"}} className="notification-body">
              {notifiData?.data?.info?.map((data) => {
                return (
                  <table  className="notification-div">
                    <div className="data-remove-div">
                      <span className="notifi-text-data">
                        {data?.type === "REMINDER" ? (
                          <p
                            style={{ fontWeight: "bold" }}
                            className="notifi-text-data"
                          >
                            Remider:{" "}
                          </p>
                        ) : (
                          ""
                        )}{" "}
                        &nbsp;
                        {data?.message}
                      </span>

                      <div
                        id="demo-positioned-button"
                        aria-controls={
                          open ? "demo-positioned-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        className="remove-noti"
                      >
                        •••
                      </div>

                      <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "left",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          {" "}
                          <p className="remove-noti">
                            Remove This Notification
                          </p>{" "}
                        </MenuItem>
                      </Menu>
                    </div>
                    {data.type !== "OTHERS" && data.type !== "REMINDER" && (
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
                    )}
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
                      <span className="time-day-words">
                        {moment(data.date).format("MMMM Do")} at{" "}
                        {moment(data.date).format("h:mm:ss a")}{" "}
                      </span>
                    </div>
                  </table>
                );
              })}
            </div>
          </div>
          <div className="noti-Rpage">
            <div className="noti-header-R">
              <div className="profile-l">
                <span className="hello">Hello</span>
                <span className="renuka-shetty">
                  {profiled?.data?.info?.name} <i class="arrow down"></i>
                </span>
                <p>Recruiter</p>
              </div>

              <div className="profile-pic-div">
                <img
                  className="profile-pic-size"
                  src={profiled?.data?.info?.profileImage}
                  alt=""
                />
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
                    {visible && (
                      <>
                        {" "}
                        <img
                          style={{
                            height: "60px",
                            width: "60px",

                            position: "absolute",
                          }}
                          src={profileMember}
                          alt=""
                        />
                        <img
                          onClick={() => {
                            removeElement();
                          }}
                          style={{
                            position: "relative",
                            marginTop: "39px",
                            marginLeft: "38px",
                            marginRight: "8px",
                          }}
                          src={deleteMember}
                          alt=""
                        />
                      </>
                    )}
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
