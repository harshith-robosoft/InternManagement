import React, { useState, useEffect } from 'react'
import SideNav from "../../../components/signIn/sideNavBar/SideNav"
import "./CVAnalysisDetails.css"
import calenderImg from "../../../assets/images/icn_calender_deselected.png";
import search from "../../../assets/images/icn_search.png";
import arrow from "../../../assets/images/icn_active dropdown.png"
import hr from "../../../assets/images/icn_hr.png";
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import format from 'date-fns/format'
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import { BASE_URL } from "../../../services/BaseUrl";
import { useNavigate } from "react-router-dom";
import { addTech } from "../../../features/cvAnalysisSlice"
import { useDispatch } from 'react-redux';

let profileApi = `${BASE_URL}/intern-management/member/logged-profile`;

const CVAnalysisDetails = () => {

  const [cal, setCal] = useState(false)
  const [open, setOpen] = useState(false)
  const [calender, setCalender] = useState('')
  const [newDate, setNewDate] = useState();
  const [show, setShow] = useState();
  const [profile, setProfile] = useState();
  const [inputValue, setInputValue] = useState("");
  const [getSearch, setGetSearch] = useState();
  const [searcheddata, setsearcheddata] = useState(false);
  const [showData, setShowData] = useState(false);
  const [ss, setSS] = useState(false);
  const [dd, setDD] = useState(false);
  const [status, setStatus] = useState();
  const [rcvDate, setRcvDate] = useState("");
  const [desg, setDesg] = useState("");
  const [role, setRole] = useState("");
  const [appliColor, setAppliColor] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDate = (e) => {
    setNewDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target.search.value);

  };

  useEffect(() => {
    getStatus()
      .then((data) => {
        console.log(data);

      })
  })
  // }, [status], [rcvDate], [desg])

  useEffect(() => {
    getSearchedData().
      then((data) => {
        setGetSearch(data);
        setsearcheddata(true);
        setShowData(false);
        // setNewDate("");
        // setSS(false);
      })

  }, [ss, inputValue])

  useEffect(() => {
    getData(newDate)
      .then((data) => {
        console.log(data);
        setShow(data);
        setShowData(true);
        setsearcheddata(false);
        // setInputValue("");
        // setDD(false);
      })

  }, [dd, newDate])

  const profileData = () =>
    axios.get(profileApi, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
      },
    });

  useEffect(() => {
    profileData()
      .then((data) => {
        // console.log(data);
        setProfile(data);
      })

  }, []);

  useEffect(() => {
    dispatch(addTech(role));
  }, [role]);

  const getStatus = async () => {
    const formData = new FormData();
    formData.append('designation', desg);
    formData.append('newStatus', status);
    formData.append('date', rcvDate);

    axios.request(
      `https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/update-position-status`,
      {
        method: "PUT",
        headers: {
          'Content-type': 'multipart/form-date',
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
        data: formData,
      }
    ).then((res) => {
      console.log(res);
    })

      .catch((error) => {
        console.log(error);
      });

  };

  const getData = async (newDate) => {
    console.log("entered", newDate)

    try {
      const response = await axios.get("https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/cv-analysis",

        {
          method: 'GET',
          params:
            { date: newDate },
          headers: {
            "Content-Type": "application/JSON",
            Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
          },

        });
      // console.log(response);
      return response?.data;
    }

    catch (error) {
      console.log(error);
    }
  }

  const getSearchedData = async () => {

    try {
      const response = await axios.get(`https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/search/${inputValue}`,

        {
          method: 'GET',
          headers: {
            "Content-Type": "application/JSON",
            // "Accept": "application/JSON",
            Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
          },

        });
      // console.log(response);
      return response?.data;
    }
    catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* {cal ? <Calendar date={new Date()} onChange={handleSelect} className='cvAnalysis-cal' id="calendar" /> : ""} */}
      {/* {cal ? <Calendar onChange={onChange} value={value} /> : ""} */}
      <div className="cvAnalysis-mainDiv">
        <div className='cvAnalysis-mainDivComponents'>
          <SideNav />

          <div className='cvAnalysis-assignDiv'>
            <div className="cvAnalysis-header">
              <div className='cvAnalysis-CVText'>
                CV Analysis
              </div>
              <div className='cvAnalysis-headerRight'>
                <div>
                  {/* <img className="" src={calenderImg} alt="calenderImage" onClick={() => { setCal(true) }} /> */}
                  {/* <input type='date' onChange={handleDate} className='cvAnalysis-dateInput' /> */}

                  <span className="datepicker-toggle">
                    <span className={"datepicker-toggle-button"}></span>
                    {/* className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')} */}
                    <input type="date" class="datepicker-input" onChange={handleDate} />
                  </span>


                </div>
                <div className='cvAnalysis-searchDiv'>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      className='cvAnalysis-search'
                      placeholder="Search"
                      id="search"
                      name="search"
                    // onChange={(e) => {
                    //   setInputValue(e.target.value);
                    //   setsearcheddata(false)
                    // }}
                    />
                    <div className='cvAnalysis-searchImage'>
                      <button className="searchBackground" type='submit'>
                        <img className="cvAnalysis-searchIcon" src={search} alt="searchImage" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="cvAnalysis-CandidateInfo">
                  <div className="cvAnalysis-CandidateData">
                    <div className="cvAnalysis-CandidateName" >
                      {profile?.data?.info?.name}
                    </div>
                    <div className="cvAnalysis-CandidateArrow">
                      <img className="cvAnalysis-CandidateArrowImage" src={arrow} alt="arrowImage" />
                    </div>
                  </div>
                  <div className="cvAnalysis-CandidateProfession">
                    {profile?.data?.info?.position}
                  </div>

                </div>

                <div>
                  <img src={profile?.data?.info?.profileImage} alt="image" className="cvAnalysis-hrImg" />
                </div>
              </div>
            </div>
            {/* <div className="cvAnalysis-AssignDetails">

              <div className="cvAnalysis-DetailsHeader">
                <div className="cvAnalysis-DetailsHeaderText">
                  <div className='cvAnalysis-HeaderStyle'>Designation</div>
                  <div className='cvAnalysis-HeaderStyle'>Applicants</div>
                  <div className='cvAnalysis-HeaderStyle'>Recieved Date</div>
                  <div className='cvAnalysis-HeaderStyle'>Status</div>
                  <div className='cvAnalysis-HeaderStyle'>Location</div>
                </div>
                <div className="cvAnalysis-DetailsHeaderBorder"></div>
              </div>

              <div className="cvAnalysis-AssignDetailItems">
                <div className="cvAnalysis-AssignDetailItem">
                  <div className='cvAnalysis-desg'>

                    Angular Developer
                  </div>
                  <div className='cvAnalysis-appliWidth'>
                    <div className='cvAnalysis-appli'>
                      8
                    </div>
                  </div>
                  <div className='cvAnalysis-recvDate'>
                    04 June, 2020
                  </div>
                  <div className='cvAnalysis-ActiveOrClosedClass'>
                    <div className='cvAnalysis-ActiveOrClosed'>
                      Active
                    </div>
                    <div className="cvAnalysis-CandidateArrowImage" >
                      <img src={arrow} alt="arrowImage" />
                    </div>
                  </div>
                  <div className='cvAnalysis-assignLocation'>
                    Udupi/Mumbai
                  </div>
                </div>
              </div>
            </div> */}

            <div className="main-white-body-CV">
              <div className="Head-col-body-CV">
                <span className="desig-desg-CV">Designation</span>
                <span className="Name-head-CV">Applicants</span>
                <span className="desig-head-CV">Recieved Date</span>
                <span className="desig-head-CV">Status</span>
                <span className="desig-head-CV">Location</span>
              </div>

              {searcheddata && getSearch?.info[1].map(({ applicants, designation, receivedDate, status, locations }) => {

                return (
                  <div className="row-data-CV">
                    <div className="row-col-body-CV">
                      <span className="nithin-nithin-CV" onClick={() => { dispatch(addTech(designation)); console.log("clicked"); navigate('/UiUx') }}>{designation}</span>

                      <div className='cvAnalysis-appliWidth'>
                        <div className={appliColor === "blue" ? 'cvAnalysis-appli cvAnalysis-ac' : 'cvAnalysis-appli cvAnalysis-cl'}>
                          {applicants}
                        </div>
                      </div>

                      <span className="nithin-anand-CV">{receivedDate}</span>
                      <span className="nithin-anand-CV">
                        {status}
                        <div class="dropdown-CV">
                          <i class="arrow down"></i>
                          <div class="dropdown-content-CV">
                            <div onClick={() => {
                              setStatus("active"); setRcvDate(receivedDate); setDesg(designation); getSearchedData(); setSS(!ss); setAppliColor("red")

                            }} >ACTIVE</div>
                            <div onClick={() => {
                              setStatus("closed"); setRcvDate(receivedDate); setDesg(designation); getSearchedData(); setSS(!ss); setAppliColor("blue")

                            }} >CLOSE</div>
                          </div>
                        </div>
                      </span>

                      <span className="nithin-anand-CV">{locations.toString().replaceAll(",", "/")}</span>
                    </div>
                  </div>
                )
              })
              }

              {showData && show?.info[1].map(({ applicants, designation, receivedDate, status, locations }) => {

                return (
                  <div className="row-data-CV" >
                    <div className="row-col-body-CV">
                      <span className="nithin-nithin-CV" onClick={() => { dispatch(addTech(designation)); console.log("clicked"); navigate('/UiUx') }}>{designation}</span>

                      <div className='cvAnalysis-appliWidth'>
                        <div className={appliColor === "blue" ? 'cvAnalysis-appli cvAnalysis-ac' : 'cvAnalysis-appli cvAnalysis-cl'}>
                          {applicants}
                        </div>
                      </div>
                      <span className="nithin-anand-CV">{receivedDate}</span>
                      <span className="nithin-anand-CV">
                        {status}
                        <div class="dropdown-CV">
                          <i class="arrow down"></i>
                          <div class="dropdown-content-CV">
                            <div onClick={() => {
                              getStatus(); setStatus("active"); setRcvDate(receivedDate); setDesg(designation); getData(newDate); setDD(!dd); setAppliColor("red")

                            }}>ACTIVE</div>
                            <div onClick={() => {
                              getStatus(); setStatus("closed"); setRcvDate(receivedDate); setDesg(designation); getData(newDate); setDD(!dd); setAppliColor("blue")

                            }}>CLOSED</div>

                          </div>
                        </div>
                      </span>

                      <span className="nithin-anand-CV">{locations.toString().replaceAll(",", "/")}</span>
                    </div>
                  </div>
                )
              })
              }
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default CVAnalysisDetails
