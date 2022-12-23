import React, { useState, useEffect } from "react";
import "./RejectedCV.css";
import SideNav from "../sideNavBar/SideNav";
import hr from "../../../assets/images/icn_hr.png";
import arrow from '../../../assets/images/icn_active dropdown.png'
import search from "../../../assets/images/icn_search.png"
import photo from "../../../assets/images/icn_photo_thumbnail.png";
import location from "../../../assets/images/icn_contact_recruit.png"
import call from "../../../assets/images/icn_location_recruit.png"
import { BASE_URL } from "../../../services/BaseUrl";
import { addRejSearch } from "../../../features/cvAnalysisSlice";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addId } from "../../../features/cvAnalysisSlice"
import RejectedDrawer from "../rejectedDrawer/RejectedDrawer";
import Drawer from 'react-modern-drawer'

const RejectedCV = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  const [profile, setProfile] = useState();
  const [rejData, setRejData] = useState();
  const [rejName, setRejName] = useState("");
  const [rejSearchedData, setRejSearchedData] = useState();
  const [searched, setsearched] = useState(false);


  const dispatch = useDispatch();

  const rejSearchedValue = useSelector((state) => state.cv.searchValue);
  const idApi = useSelector((state) => state.cv.id);

  let profileApi = `${BASE_URL}/intern-management/member/logged-profile`;
  let rejApi = `${BASE_URL}/intern-management/recruiter/rejected-cv`;
  const rejSearch = `${BASE_URL}/intern-management/recruiter/rejected-cv-search?key=${rejSearchedValue}`

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRejSearch(rejName));
    setsearched(!searched);
  };

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const profileData = () =>
    axios.get(profileApi, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
      },
    });

  const rejInfo = () =>
    axios.get(rejApi, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
      },
    });

  const rejSearchInfo = () =>
    axios.get(rejSearch, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
      },
    });

  const reRecruit = async () => {
    try {
      const response = await axios.put(
        "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/candidate-recruitment", idApi,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
            "Content-Type": "application/JSON",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    rejSearchInfo()
      .then((data) => {
        console.log(data?.data);
        setRejSearchedData(data?.data);

      })

  }, [rejSearchedValue]);

  useEffect(() => {
    rejInfo()
      .then((data) => {
        console.log(data?.data);
        setRejData(data?.data);

      })

  });

  useEffect(() => {
    profileData()
      .then((data) => {
        // console.log(data);
        setProfile(data);
      })

  }, []);

  return (
    <>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        size='900px'
        style={{ 'background-color': '#FFFFFF', 'borderRadius': '40px 0px  0px 40px', 'boxShadow': '0 6px 11px 5px rgba(0,0,0,0.07)' }}
        className='UiUx-drawer'

      >
        <RejectedDrawer />
      </Drawer>


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
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className='RejCV-search'
                      placeholder="Search"
                      id="search"
                      name="search"
                      value={rejName}
                      onChange={(e) => {
                        setRejName(e.target.value);
                        setsearched(false);
                      }}
                    />
                    <div className='RejCV-searchImage'>
                      <button className="searchBackground" type='submit'>
                        <img className="RejCV-searchIcon" src={search} alt="searchImage" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="RejCV-CandidateInfo">
                  <div className="RejCV-CandidateData">
                    <div className="RejCV-CandidateName" >
                      {profile?.data?.info?.name}
                    </div>
                    <div className="RejCV-CandidateArrow">
                      <img className="RejCV-CandidateArrowImage" src={arrow} alt="arrowImage" />
                    </div>
                  </div>
                  <div className="RejCV-CandidateProfession">
                    {profile?.data?.info?.position}
                  </div>

                </div>

                <div>
                  <img src={profile?.data?.info?.profileImage} alt="image" className="RejCV-hrImg" />
                </div>
              </div>
            </div>

            <div className="rejCVCards">
              {searched ? rejSearchedData?.info?.map((data) => {

                return (
                  <div className="rejCVCard">
                    <div className="rejCVPhoto" onClick={() => { dispatch(addId(data?.applicationId)); toggleDrawer(); }}>
                      <div>
                        <img src={data?.imageUrl} alt="image" className="rejCVProfileImg" />
                      </div>
                      <div className="rejCVPhotoInfo">
                        <div className="rejCVName">
                          {data?.name}
                        </div>
                        <div className="rejCVDesig">
                          {data?.designation}
                        </div>
                      </div>
                    </div>
                    <hr className="rejCVborder"></hr>

                    <div>
                      <div className="rejCVloc">
                        <img src={location} alt="image" className="rejCVimg" /> &nbsp;&nbsp;&nbsp;
                        {data?.location}
                      </div>
                      <div className="rejCVloc">
                        <img src={call} alt="image" className="rejCVimg" /> &nbsp;&nbsp;&nbsp;
                        {data?.mobileNumber}
                      </div>

                    </div>
                    <div className="rejCVBtnDiv" onClick={() => { dispatch(addId(data?.applicationId)); reRecruit(); }}>
                      <button className="rejCVbtn">Recruit</button>
                    </div>
                  </div>

                )
              })
                :
                rejData?.info?.map((data) => {

                  return (
                    <div className="rejCVCard" >
                      <div className="rejCVPhoto" onClick={() => { dispatch(addId(data?.applicationId)); toggleDrawer(); }}>
                        <div>
                          <img src={data?.imageUrl} alt="image" className="rejCVProfileImg" />
                        </div>
                        <div className="rejCVPhotoInfo">
                          <div className="rejCVName">
                            {data?.name}
                          </div>
                          <div className="rejCVDesig">
                            {data?.designation}
                          </div>
                        </div>
                      </div>
                      <hr className="rejCVborder"></hr>

                      <div>
                        <div className="rejCVloc">
                          <img src={location} alt="image" className="rejCVimg" /> &nbsp;&nbsp;&nbsp;
                          {data?.location}
                        </div>
                        <div className="rejCVloc">
                          <img src={call} alt="image" className="rejCVimg" /> &nbsp;&nbsp;&nbsp;
                          {data?.mobileNumber}
                        </div>

                      </div>
                      <div className="rejCVBtnDiv" onClick={() => { dispatch(addId(data?.applicationId)); reRecruit(); }}>
                        <button className="rejCVbtn">Recruit</button>
                      </div>
                    </div>

                  )
                })
              }

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
