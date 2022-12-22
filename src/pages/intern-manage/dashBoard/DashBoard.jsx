import React, { useEffect, useState } from "react";
import "./DashBoard.css";
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
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  cvno,
  getCv,
  requestFive,
  requestFour,
  requestOne,
  requestThree,
  requestTwo,
} from "../../../services/dashRect";
import { BASE_URL } from "../../../services/BaseUrl";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../../../features/RegisterSlice";
const DashBoard = () => {
  const [cv, setcv] = useState("");
  const [notifi, setNotifi] = useState("");
  const [organ, setOrgan] = useState("");
  const [sumary, setSumary] = useState("");
  const [profiled, setProfiled] = useState("")
  const [date, setDate] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch()
  function deleteItems() {
    // Clear localStorage items 
    sessionStorage.clear()
  }
  let today = new Date();
  let dd = today.getDate();
  let yyyy = today.getFullYear();
  const monthNames = {
    1: "Jan",
    2: "Feb",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
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

  // useEffect(()=>{
  //   if(!sessionStorage.getItem("auth")){
  //     navigate("/sigup")
  //   }
  // })
  useEffect(() => {
    const getCv = async () => {
      let response = await axios
        .all([requestOne(), requestTwo(), requestThree(), requestFour(), requestFive()])
        .then(
          axios.spread((...responses) => {
            const cvCount = responses[0];
            const notification = responses[1];
            const organizer = responses[2];
            const summaryData = responses[3];
            const profileData = responses[4];
            // const responseTwo = responses[1];
            // const responesThree = responses[2];
            // use/access the results
            setcv(cvCount);
            setNotifi(notification);
            setOrgan(organizer)
            setSumary(summaryData)
            setProfiled(profileData)
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    };

    getCv();
  }, []);
  // console.log("CV DETALIS", cv);
  console.log("notifi", notifi?.data?.info);
  console.log("organize", organ)
  console.log("date trial", moment(notifi?.data?.info?.date).format("Do MMMM YYYY|h:mm a"))
  const momentDate = moment(notifi?.data?.info?.date).format("Do MMMM YYYY | h:mm a")
    // console.log("summarydata",sumary )
    // console.log("profiledata", profiled);
    // notifi?.data?.info?.date
    ;
  // moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  // const sampledate = notifi?.data?.info?.date ? notifi?.data?.info?.date : "2022-12-13T04:57:27.000+00:00"
  // "2022-12-13T04:57:27.000+00:00"
  const sampledate = "2022-12-13T04:57:27.000+00:00"
  const arr = sampledate.split("T");
  // console.log(arr);
  const strdate = arr[0];
  const datearr = strdate.split("-");
  const strtime = arr[1];
  const timearr = strtime.split(".");
  // console.log("datearr", datearr);
  // console.log("timearr", timearr);
  // console.log("time", timearr[0]);
  let finaldate = "";
  for (let i = datearr.length - 1; i >= 0; i--) {
    finaldate += datearr[i];

    finaldate += "-";
  }

  // console.log("entered", monthNames[datearr[1]]);
  // const {userDetails}= useSelector(state => state.dashboard)
  // console.log('huhuouhoiuhoih',userDetails);
  // console.log(datearr[1]);
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
          <div className="cv-div" onClick={() => {
            navigate("/cvAnalysis");
          }}>
            <div className="search-cv">
              <img className="home-logo" src={search} alt="" />
              <span className="assign-board">CV Analysis</span>
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/assignboard");
            }}
            className="cv-div"
          >
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

          <div onClick={() => {
            navigate("/invite");
          }} className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={invite} alt="" />
              <span className="assign-board">
                &nbsp;&nbsp;&nbsp;&nbsp;Invite&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </div>

          <div onClick={() => {
            navigate("/notification");
          }} className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={notify} alt="" />
              <span className="assign-board">Notification</span>
            </div>
          </div>

          <div className="cv-div">
            <div className="search-cv">
              <img className="home-logo" src={settings} alt="" />
              <span className="assign-board">
                &nbsp;&nbsp;Settings&nbsp;&nbsp;
              </span>
            </div>
          </div>
          <div className="cv-div">
            <div onClick={() => {
              deleteItems()
              navigate("/")
            }} className="logout-cv">
              <img className="home-logo" src={logout} alt="" />
              <span className="assign-board">
                &nbsp;&nbsp;Logout&nbsp;&nbsp;
              </span>
            </div>
          </div>
        </div>

        <div className="dash-page">
          <div className="dash-page-L">
            <div className="dash-header-L">
              <span className="dashboard-name-L">Dashboard</span>
              <div className="reg-date-div">
                <div
                  onClick={() => {
                    navigate("/Registerpg1");
                  }}
                  className="register-btn-L"
                >
                  <span>Register</span>
                  <img className="home-logo" src={pen} alt="" />
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
            <div className="welcome">
              <div className="welcome-L">
                <span className="welcome-back-renuka ">
                  Welcome Back, {profiled?.data?.info?.name} !
                </span>
                <span className="you-have-36-new-cv-t">
                  You have <span>{cv?.data?.info}</span> new CV to Analysis.
                </span>
                <button className="check-btn">
                  <p>Check Now</p>
                </button>
              </div>

              <img className="card-img" src={card} alt="" />
            </div>
            <div className="cv-graph-div"></div>
            <span className="cv">CV Analysis</span>
            <div className="graph-cv">ngcbcbcg</div>

            <div className="invite-div">
              <div className="invite-l">
                <span className="invite-candidate">Invite Candidate</span>
                <span className="send-invite-by-email">
                  Send invite by email address
                </span>
              </div>
              <div>
                <div onClick={() => {
                  navigate("/invite");
                }} className="invite-btn-L">
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
                <span className="renuka-shetty">
                  {profiled.data?.info?.name} <i class="arrow down"></i>
                </span>
                <p>Recruiter</p>
              </div>

              <div className="profile-pic-div">
                <img className="profile-pic-size" src={profiled?.data?.info?.profileImage} alt="" />
              </div>
            </div>
            <span className="summary-march ">Summary(March)</span>
            <div className="summary-box">
              <div className="sms-box">
                <div>
                  <img src={sms} alt="pic" />
                </div>
                <div className="app-no">
                  <span className="no">{sumary?.data?.info?.applications}</span>
                  <span className="applications ">Applications</span>
                </div>
              </div>

              <div className="sms-box-2">
                <div>
                  <img src={person} alt="pic" />
                </div>
                <div style={{ marginRight: "10px" }} className="app-no">
                  <span className="no">{sumary?.data?.info?.shortlisted}</span>
                  <span className="applications ">Shortlisted</span>
                </div>
              </div>

              <div className="sms-box-2">
                <div>
                  <img src={timer} alt="pic" />
                </div>
                <div style={{ marginRight: "28px" }} className="app-no">
                  <span className="no">{sumary?.data?.info?.onHold}</span>
                  <span className="applications ">On hold</span>
                </div>
              </div>

              <div className="sms-box-2">
                <div>
                  <img src={dele} alt="pic" />
                </div>
                <div style={{ marginRight: "23px" }} className="app-no">
                  <span className="no">{sumary?.data?.info?.rejected}</span>
                  <span className="applications ">Rejected</span>
                </div>
              </div>
            </div>
            <div className="notify-div">
              <span className="notification ">Notification</span>
              <div onClick={() => {
                navigate("/notification");
              }} className="viewall">
                <span className="view-all">View All </span>
                <img className="icn-viewall" src={rightArrow} alt="" />
              </div>
            </div>
            <div className="notify-box">
              <span className="campus-interview-at">
                {notifi?.data?.info?.message}
              </span>
              <span className="notify-time"> {momentDate}</span>
              <img className="oval" src={orgprofile} alt="" />
            </div>
            <span
              className="notification"
              style={{ marginLeft: "32px", marginTop: "1.5rem" }}
            >
              Organizers
            </span>
            <div className="organise-box">
              {organ?.data?.info?.data.map((data) => {
                return (
                  <div className="org-prof-name">
                    <img className="org-prof-img-size" src={data?.photoUrl} alt="" />
                    <span className="raksha">{data?.name}</span>
                    <span className="interviews">{data?.interviews} interview</span>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
