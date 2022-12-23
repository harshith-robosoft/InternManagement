import React from "react";
import "./RejectedCV.css";
import SideNav from "../sideNavBar/SideNav";
import hr from "../../../assets/images/icn_hr.png";
import arrow from '../../../assets/images/icn_active dropdown.png'
import search from "../../../assets/images/icn_search.png"
import photo from "../../../assets/images/icn_photo_thumbnail.png";
import location from "../../../assets/images/icn_contact_recruit.png"
import call from "../../../assets/images/icn_location_recruit.png"

const RejectedCV = () => {
  return (
    <>
      <div className="RejCV-mainDiv">
        <div className='RejCV-mainDivComponents'>
          <SideNav />
          <div className='RejCV-assignDiv'>
            <div className="RejCV-header">
              <div className='RejCV-CVText'>
                Rejected CV
              </div>
              <div className='RejCV-headerRight'>
                <div className='RejCV-searchDiv'>
                  <form>
                    <input
                      type="text"
                      className='RejCV-search'
                      placeholder="Search"
                      id="search"
                      name="search"
                    />
                    <div className='RejCV-searchImage'>
                      <div className="searchBackground">
                        <img className="RejCV-searchIcon" src={search} alt="searchImage" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="RejCV-CandidateInfo">
                  <div className="RejCV-CandidateData">
                    <div className="RejCV-CandidateName" >
                      Renuka Shetty
                    </div>
                    <div className="RejCV-CandidateArrow">
                      <img className="RejCV-CandidateArrowImage" src={arrow} alt="arrowImage" />
                    </div>
                  </div>
                  <div className="RejCV-CandidateProfession">
                    Recruiter
                  </div>

                </div>

                <div>
                  <img src={hr} alt="image" className="RejCV-hrImg" />
                </div>
              </div>
            </div>

            <div className="rejCVCards">
              <div className="rejCVCard">
                <div className="rejCVPhoto">
                  <div>
                    <img src={photo} alt="image" className="" />
                  </div>
                  <div className="rejCVPhotoInfo">
                    <div className="rejCVName">
                      KoushiK Kumar
                    </div>
                    <div className="rejCVDesig">
                      Project Manager
                    </div>
                  </div>
                </div>
                <hr className="rejCVborder"></hr>

                <div>
                  <div className="rejCVloc">
                    <img src={location} alt="image" className="rejCVimg" /> &nbsp;&nbsp;&nbsp;
                    Bangalore
                  </div>
                  <div className="rejCVloc">
                    <img src={call} alt="image" className="rejCVimg" /> &nbsp;&nbsp;&nbsp;
                    9876543218
                  </div>

                </div>
                <div className="rejCVBtnDiv">
                  <button className="rejCVbtn">Recruit</button>
                </div>
              </div>

            </div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
};

export default RejectedCV;
