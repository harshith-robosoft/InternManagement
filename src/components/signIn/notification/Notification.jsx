import React, { useEffect, useState } from "react";
import SideNav from "../sideNavBar/SideNav";
import "./Notification.css";
import searchIcon from "../../../assets/images/icn_search.png";
import Switch from "react-switch";
import addProfile from "../../../assets/images/add_member.png";
import timeicn from "../../../assets/images/icn_notificationtime.png";
import deleteMember from "../../../assets/images/icn_delete member.png";
import * as Yup from "yup";
import {
  createEventApi,
  notificationData,
  organizersApi,
  profileInfoN,
} from "../../../services/Notifications";
import axios from "axios";
import moment from "moment";
import { addCandidateId, getCanId } from "../../../features/dashBoardSlice";
import { useDispatch, useSelector } from "react-redux";
import { addOneProfile, addPicture, fetchAsyncSearchNotifi, getPicture, getProfiles, getSearchNoti, removeOneProfile } from "../../../features/notificatonSlice";
import { useFormik } from "formik";
const Notification = () => {
  const [notifiData, setNotifiData] = useState("");
  const [profiled, setProfiled] = useState("");
  const [org, setOrg] = useState("");
  const [visible, setVisible] = useState(true);
  const [indexvalue, setIndexvalue] = useState(1);
  const [emailId, setemailId] = useState("");
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
  const handleChanges = (nextChecked) => {
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
  // console.log("organ list", org);
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

  const acceptDeclineInvite = async (id,type) => {
    try {
      const response = await axios.post(
        "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/member/event-status-update",
        {
          notificationId : id,
          status : type
        },

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

  // const createEvent = async (id,type) => {
  //   try {
  //     const response = await axios.post(
  //       "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/member/event-creation",
  //       {
  //       dataToSend
  //       },

  //       {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-type": "application/json",
  //           Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const initialValues = {
    title:"",
    name: "",
    location:"",
    date: "",
    time: "",
    period:"",
    description: "",
    // members:[]
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Please enter Event Title"),
    name: Yup.string().required("Please enter Institute name"),
    location: Yup.string().required("Please enter Institute Location"),
    date:Yup.string().required("Please enter Date & time"),
    period:Yup.string().required("Please enter d"),
    description:Yup.string().required("Please enter description"),
    // members:Yup.string().required("Please enter d"),
    
 
    
  });


  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        let profilesData=profileAdd;
        let dataToSend = {
          title : values.title,
          venue : values.name,
          location : values.location,
          date : values.date,
          time : values.time,
          period : values.period,
          description : values.description,
          invitedEmails : profilesData
        };
        console.log("sent data",   values);
        console.log("get any data ");
        const memberEvent = await createEventApi (dataToSend);
        console.log("Received Response", memberEvent);
        // navigate("/signin")
        // console.log(values);
      },
    });
  const getsearch = useSelector(getSearchNoti);
  const [inputValue, setInputValue] = useState("");
  const [searcheddata, setsearcheddata] = useState(false);
  const handleSearch = (e) => {
    e.preventDefault();
    setsearcheddata(!searcheddata);
    // dispatch(fetchAsyncSearch(inputValue))
    dispatch(fetchAsyncSearchNotifi(inputValue));
  };
  const profileAdd = useSelector(getProfiles);
  // console.log("getprofiles", profileAdd);

  const pic= useSelector(getPicture);
  // console.log("the pic ", pic);

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
                  onChange={handleChanges}
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
                  <form onSubmit={handleSearch}>
                  <input
                    placeholder="Search"
                    className="input-ab"
                    type="text"
                    style={{ marginTop: "1px" }}
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setsearcheddata(false);
                    }}
                  />
                  </form>
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
                {searcheddata
              ? getsearch?.info?.map((data, index) => {
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
                        <button onClick={() => {
                               dispatch(addCandidateId(data.notificationId));
                               acceptDeclineInvite(data.notificationId,"Join")                            
                            }} className="join-btn">
                          <p className="join">Join</p>
                        </button>
                        <button  onClick={() => {
                               dispatch(addCandidateId(data.notificationId));
                               acceptDeclineInvite(data.notificationId,"Decline")

                               
                            }} className="decline-btn">
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
                  })
                :notifiData?.data?.info?.map((data, index) => {
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
                          <button onClick={() => {
                               dispatch(addCandidateId(data.notificationId));
                               acceptDeclineInvite(data.notificationId,"Join")

                               
                            }} className="join-btn">
                            <p className="join">Join</p>
                          </button>
                          <button  onClick={() => {
                               dispatch(addCandidateId(data.notificationId));
                               acceptDeclineInvite(data.notificationId,"Decline")

                               
                            }}  className="decline-btn">
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
            <form onSubmit={handleSubmit} >
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
                    id="title"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                     {errors.title && touched.title ? (
                  <div className="SignIn-formError">{errors.title}</div>
                ) : null}
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
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   {errors.name && touched.name ? (
                  <div className="SignIn-formError">{errors.name}</div>
                ) : null}
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
                    id="location"
                    name="location"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   {errors.location && touched.location ? (
                  <div className="SignIn-formError">{errors.location}</div>
                ) : null}
                </div>
                <div
                  style={{ marginTop: "20px" }}
                  className="date-time-div-input"
                >
                  <div className="date-noti">
                    <span className="input-name-noti">Date</span>
                    <input     id="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur} type="date" className="date-inp-noti" />
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
                      <select   id="time"
                    name="time" value={values.time}
              onChange={handleChange}
              onBlur={handleBlur} className="time-drop">
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
                      <select   id="period"
                    name="period"  value={values.period}
              onChange={handleChange}
              onBlur={handleBlur} className="time-drop">
                        <option value="AM">AM</option>
                        <option value="PM">PM</option>
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
                    id="description"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                   {errors.description && touched.description ? (
                  <div className="SignIn-formError">{errors.description}</div>
                ) : null}
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
                  {profileAdd.map((data) => {
                    return (
                      <>
             
              
                      
                      <div className="profile-x-mark-whole">
                        <>
                          {" "}
                       
                          <img
                            style={{
                              height: "60px",
                              width: "60px",
                              radius:"50%",

                              position: "absolute",
                            }}
                            src=""
                            alt="what"
                          />
                     
                          
                          <img
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
                            onClick={()=>{
                              dispatch(removeOneProfile())
                            }}
                          />
                        </>
                      </div>
                   
                
                 </>
                    );
                  })}

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
                            onClick={() => {
                              dispatch(addOneProfile(dropItem.emailId));
                              dispatch(addPicture(dropItem.photoUrl));
                              console.log(dropItem.emailId);
                              console.log("getprofil  es", profileAdd);
                            }}
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
                <button type="Submit" className="join-btn">
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
