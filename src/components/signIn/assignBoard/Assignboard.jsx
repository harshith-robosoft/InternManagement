import React, { useEffect, useState } from "react";
import SideNav from "../sideNavBar/SideNav";
import profile from "../../../assets/images/icn_hr.png";
import "./AssignBoard.css";
import searchIcon from "../../../assets/images/icn_search.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { profileInfo } from "../../../services/AssignBord";
const Assignboard = () => {
  const [profiled,setProfiled] = useState("")

  // const {userDetails}= useSelector(state => state.dashboard)

  const gettokendata = sessionStorage.getItem("auth");
  useEffect(() => {
    const AssignData = async () => {
      let response = await axios
        .all([profileInfo()])
        .then(
          axios.spread((...responses) => {
            const profileData = responses[0];
            // const notification = responses[1];
            // const organizer = responses[2];
            // const summaryData = responses[3];
            // const profileData = responses[4];
            // use/access the results
            // setcv(cvCount);
            // setNotifi(notification);
            // setOrgan(organizer)
            // setSumary(summaryData)
            setProfiled(profileData)
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    };

    AssignData(gettokendata);
  }, []);
  console.log("data prof",profiled );
  return (
    <>
      <div className="outer-black">
        <SideNav />
        <div className="outer-white">
          <div className="header">
            <span className="assign-board-ab">Assign Board</span>
            <div className="search-prof-R-box">
              <div className="search-box">
                <div className="search-img-outer-red">
                  <img className="search-icn-red" src={searchIcon} alt="pic" />
                </div>
                <form >
                <input placeholder="Search" className="input-ab" type="text" /></form>
              </div>
              <div className="R-profile-div">
                <div className="dash-header-R-ab">
                  <div className="profile-l-ab">
                    {/* <span className="hello">Hello</span> */}
                    <span className="renuka-shetty">
                    {profiled.data?.info?.name}
                       <i class="arrow down"></i>
                    </span>
                    <p>Recruiter</p>
                  </div>
                  <div className="profile-pic-div-ab">
                    <img className="profile-photo-ab"
                    
                      src={profiled?.data?.info?.profileImage}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main-white-body">
            <div className="Head-col-body">
              <span className="Name-head">Name</span>
              <span className="desig-head">Designation</span>
              <span className="desig-head">Location</span>
              <span className="desig-head">Assigned Date</span>
              <span className="desig-head">Organizer</span>
            </div>

            <table className="row-data">
              <div className="row-col-body">
                <span className="Name-row">Name</span>
                <span className="nithin-anand">Designavdstion</span>
                <span className="nithin-anand">Designatvddion</span>
                <span className="nithin-anand">Designatvxvdxxion</span>
                <span className="nithin-anand">
                  Designativfvfdon
                  <div class="dropdown">
                    <i class="arrow down"></i>
                    <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                    </div>
                  </div>
                </span>
              </div>
            </table>

            <table className="row-data">
              <div className="row-col-body">
                <span className="Name-row">Namekkkkkkkkkk</span>
                <span className="nithin-anand">Designationfefafdwad</span>
                <span className="nithin-anand">Designationdawda</span>
                <span className="nithin-anand">Designadwada</span>
                <span className="nithin-anand">
                  Designaadwadad <i class="arrow down"></i>
                </span>
              </div>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignboard;
