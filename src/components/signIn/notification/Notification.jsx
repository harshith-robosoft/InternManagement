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
  organizersApi,
  profileInfoN,
} from "../../../services/Notifications";
import axios from "axios";
import moment from "moment";
import { addCandidateId, getCanId } from "../../../features/dashBoardSlice";
import { useDispatch, useSelector } from "react-redux";
const Notification = () => {
  const [notifiData, setNotifiData] = useState("");
  const [profiled, setProfiled] = useState("");
  const [org, setOrg] = useState("");
  const [visible, setVisible] = useState(true);
  const [indexvalue, setIndexvalue] = useState(1);
  const dispatch = useDispatch();

  function showSearch() {
    document.getElementById("welcomeDiv").style.display = "block";
  }
  function hideSearch() {
    document.getElementById("hideDiv").style.display = "none";
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
  const [showData, setShoData] = useState(false);
  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
    // document.getElementById('notiDiv').style.display = "none"
    setShoData(!showData);
    // setState(document.getElementById('notiDiv').style.display = "none")
  };

  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  useEffect(() => {
    const notificationInfo = async () => {
      let response = await axios
        .all([notificationData(), profileInfoN(), organizersApi()])
        .then(
          axios.spread((...responses) => {
            const notifyData = responses[0];
            const profileData = responses[1];
            const orgData = responses[2];
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
            setOrg(orgData);
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    };
    notificationInfo();
  }, []);
  console.log("organ list", org);
  // console.log("notifications ====", notifiData?.data?.info);
  // console.log("prof", profiled);

  // Close the dropdown if the user clicks outside of it

  // const idcan = useSelector(getCanId);

  const removeNotification = async (id) => {
    try {
      const response = await axios.put(
        "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/member/notification-removal",
        id,

        {
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // const removeNotification = (id) =>
  //   axios.put("https://app-internmanagement-221205180345.azurewebsites.net/intern-management/member/notification-removal",id, {
  //     headers: {
  //       Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
  //     },
  //   });
  //   window.onclick =  function (event) {
  //     if (!event.target === document.getElementById("dropbtn-not")) {
  //       document.getElementById(`dropdown-noti${indexvalue}`).style.display =
  //         "none";

  //       console.log("pressed");
  //     }
  //   };
  // const initialValues = {
  //   name: "",
  //   email: "",
  //   password: "",
  //   mobile: "",
  //   desg: "",
  //   position:"",
  //   changePassword: "",
  // };

  // const validationSchema = Yup.object({
  //   name: Yup.string().required("Please enter your name"),
  //   email: Yup.string()
  //     .email("You have entered a invalid mail address")
  //     .required("Please enter your email"),
  //   password: Yup.string().required("Please enter your password"),
  //   mobile: Yup.string()
  //     .matches(phoneRegExp, "Phone number is not valid")
  //     .required("Please enter mobile number"),
  //   desg: Yup.string().required("Please enter desgination"),
  //   changePassword: Yup.string().oneOf(
  //     [Yup.ref("password"), null],
  //     "Passwords must match"
  //   ),
  // });

  // const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  //   useFormik({
  //     initialValues,
  //     validationSchema,
  //     validateOnChange: true,
  //     validateOnBlur: false,

  //     onSubmit: async (values, action) => {

  //       let position = document.querySelector(
  //         '[name="use-radio-group"]:checked'
  //       ).value;
  //       console.log(position);
  //       // action.resetForm();
  //       let dataToSend = {
  //         name: values.name,
  //         emailId: values.email,
  //         mobileNumber: values.mobile,
  //         designation: values.desg,
  //         position: position,
  //         password: values.password,
  //       };
  //       console.log(values);
  //       const memberSignup = await signup(dataToSend);
  //       console.log("Received Response", memberSignup);
  //       navigate("/signin")
  //       // console.log(values);
  //     },
  //   });

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
                <div
                  id="hideDiv"
                  onClick={() => {
                    showSearch();
                    hideSearch();
                  }}
                  style={{ marginRight: "5px" }}
                  className="search-icn-outer-red"
                >
                  <img className="search-icn-red" src={searchIcon} alt="pic" />
                </div>
                <div
                  id="welcomeDiv"
                  style={{ display: "none" }}
                  className="search-box"
                >
                  <div
                    style={{ marginTop: "1px" }}
                    className="search-img-outer-red"
                  >
                    <img
                      className="search-icn-red"
                      src={searchIcon}
                      alt="pic"
                    />
                  </div>
                  <input
                    placeholder="Search"
                    className="input-ab"
                    type="text"
                    style={{ marginTop: "1px" }}
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
            {showData ? (
              ""
            ) : (
              <div className="notification-body">
                {notifiData?.data?.info?.map((data, index) => {
                  return (
                    <table className="notification-div">
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

                        {/* <div
                      //  id="demo-positioned-button"
                      //  aria-controls={
                      //    open ? "demo-positioned-menu" : undefined
                      //  }
                      //  aria-haspopup="true"
                      //  aria-expanded={open ? "true" : undefined}
                      //  onClick={handleClick}
                       className="remove-noti"
                     
                     >
                       •••
                     </div> */}

                        <div
                          onClick={() => {
                            dispatch(addCandidateId(data.notificationId));
                            console.log("noti id", data.notificationId);
                          }}
                          className="dropdown-noti"
                        >
                          <div
                            onClick={(e) => {
                              if (
                                document.getElementById(`dropdown-noti${index}`)
                                  .style.display === "none"
                              ) {
                                document.getElementById(
                                  `dropdown-noti${index}`
                                ).style.display = "block";
                              } else {
                                document.getElementById(
                                  `dropdown-noti${index}`
                                ).style.display = "none";
                              }
                            }}
                            className="dropbtn-not"
                          >
                            •••
                          </div>
                          <div
                            onClick={() => {
                              removeNotification(data.notificationId);
                            }}
                            id={`dropdown-noti${index}`}
                            className="dropdown-content-noti"
                            style={{ display: "none", right: "-15px" }}
                          >
                            <a href="#home" className="remove-noti">
                              Remove This Notification{" "}
                            </a>
                          </div>
                        </div>

                        {/* 
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
                     </Menu> */}
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
            )}
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
              style={{ marginTop: "71px", marginLeft: "30px" }}
              className="notifications"
            >
              Create Event
            </p>
            <form>
              <div className="form-data-noti">
                <div
                  style={{ marginTop: "30px" }}
                  className="input-container-noti"
                >
                  <span className="input-name-noti">Event Title</span>
                  <input
                    placeholder="Give a name for your event"
                    type="text"
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
                    type="text"
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
                    type="text"
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
                      style={{ marginLeft: "30px" }}
                      className="input-name-noti"
                    >
                      Time
                    </span>
                    {/* <select className="input-drop">
            <option value="udupi">Udupi</option>
            <option value="banglore">Banglore</option>
            <option value="mumbai">Mumbai</option>
          </select> */}
                    <div className="row-date-time">
                      <select className="time-drop">
                        <option value="12">12</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                      </select>
                      <select className="time-drop">
                        <option value="volvo">AM</option>
                        <option value="saab">PM</option>
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
                          height: "20px",
                          width: "20px",
                        }}
                        src={deleteMember}
                        alt=""
                      />
                    </>
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
                  <div class="dropdown dropbtn">
                    <img
                      style={{ height: "60px", width: "60px" }}
                      src={addProfile}
                      alt=""
                    />
                    <div
                      style={{
                        left: "-161px",
                        top: "10px",
                        height: "192px",
                        overflowY: "scroll",
                      }}
                      class="dropdown-content"
                    >
                      {org?.data?.info?.map((dropItem) => {
                        return (
                          <div
                            // key={dropItem?.emailId}
                            // id={dropItem?.emailId}
                            //   onClick={() => {
                            //     SelectedOrganizer(data.candidateId,dropItem.emailId);
                            //     dispatch(addOrganEmail(dropItem.emailId));
                            //     dispatch(addOrgNameChng(dropItem.name));
                            //     setNameChange(data.candidateId);
                            //     console.log('CANDIDATE ID', data.candidateId )
                            //     console.log(dropItem.emailId);
                            //   }}
                            className="dropdown-data"
                            href="#"
                          >
                            <img
                              src={dropItem.photoUrl}
                              className="drop-img"
                              alt=""
                            />
                            <p style={{ color: "black" }}>{dropItem.name}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
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
