import React, { useEffect, useState } from "react";
import SideNav from "../sideNavBar/SideNav";
import profile from "../../../assets/images/icn_hr.png";
import "./AssignBoard.css";
import searchIcon from "../../../assets/images/icn_search.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  organizerInfo,
  pageData,
  pageInfo,
  profileInfo,
} from "../../../services/AssignBord";
import {
  addCandidateId,
  addcandidateId,
  addOrganEmail,
  addOrgNameChng,
  fetchAsyncSearchAB,
  getCandEmail,
  getCanId,
  getOrgNameChng,
  getSearch,
} from "../../../features/dashBoardSlice";
const Assignboard = () => {
  const [profiled, setProfiled] = useState("");
  const [page, setpage] = useState("");
  const [org, setOrg] = useState("");
  const [selOrg, setSelOrg] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searcheddata, setsearcheddata] = useState(false);
  const [nameChange, setNameChange] = useState(false);
  const dispatch = useDispatch();

  const idcan = useSelector(getCanId);
  const emailOrg = useSelector(getCandEmail);
  const orgNewName = useSelector(getOrgNameChng);
  console.log("dispatch ID", orgNewName);
  // const {userDetails}= useSelector(state => state.dashboard)

  const handleSubmit = (e) => {
    e.preventDefault();
    setsearcheddata(!searcheddata);
    // dispatch(fetchAsyncSearch(inputValue))
    dispatch(fetchAsyncSearchAB(inputValue));
  };
  // const gettokendata = sessionStorage.getItem("auth");
  useEffect(() => {
    const AssignData = async () => {
      let response = await axios
        .all([profileInfo(), pageInfo(), organizerInfo()])
        .then(
          axios.spread((...responses) => {
            const profileData = responses[0];
            const pageData = responses[1];
            const orgData = responses[2];

            // const notification = responses[1];
            // const organizer = responses[2];
            // const summaryData = responses[3];
            // const profileData = responses[4];
            setProfiled(profileData);
            setpage(pageData);
            setOrg(orgData);
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    };
    AssignData();
  }, []);
  console.log("slecetd org drop click", selOrg);
  // console.log("data prof", profiled);
  console.log("page dta candi ID", page?.data?.info);
  const getsearch = useSelector((state) => state.dashboard.searchdata);
  // console.log("getsearch", getsearch);
  console.log("organizer data emailID", org?.data?.info);

  const SelectedOrganizer = async (id, email) => {
    try {
      const response = await axios.put(
        "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/organizer-assignation",
        {
          candidateId: id,
          organizerEmail: email,
          interviewDate: "2022-12-30",
        },
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    SelectedOrganizer();
  }, [])

  // axios
  //   .put(
  //     `https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/organizer-assignation`,
  //     {
  //       body: {
  //         candidateId: idcan,
  //         organizerEmail: emailOrg,
  //         interviewDate: "2022-12-30",
  //       },
  //       headers: {
  //         Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
  //       },
  //     }
  //   )
  //   .then((response) => {
  //     // handle success
  //     console.log(response);
  //   })
  //   .catch((error) => {
  //     // handle error
  //     console.log(error.response);

  //   });

  return (
    <>
      <div className="outer-black">
        <SideNav />
        <div className="outer-white">
          <div className="header">
            <span className="assign-board-ab">Assign Board</span>
            <div style={{ flexWrap: "wrap" }} className="search-prof-R-box">
              <div className="search-box">
                <div className="search-img-outer-red">
                  <img className="search-icn-red" src={searchIcon} alt="pic" />
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    placeholder="Search"
                    className="input-ab"
                    type="text"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      setsearcheddata(false);

                    }}
                  />
                </form>
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
                    <img
                      className="profile-photo-ab"
                      src={profiled?.data?.info?.profileImage}
                      alt="pic"
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
            {searcheddata
              ? getsearch?.info?.map((data) => {
                return (
                  <table className="row-data" key={data?.candidateId} id={data?.candidateId}>
                    <div className="row-col-body">
                      <span className="Name-row">{data?.name}</span>
                      <span className="nithin-anand">
                        {data?.designation}
                      </span>
                      <span className="nithin-anand">{data?.location}</span>
                      <span className="nithin-anand">{data?.assignDate}</span>
                      <span className="nithin-a">
                        {data?.organizer}
                        <div
                          class="dropdown"
                          onClick={() => {
                            dispatch(addCandidateId(data.candidateId));
                            console.log(data.candidateId);
                          }}
                        >
                          <i class="arrow down"></i>
                          <div class="dropdown-content">
                            {org?.data?.info?.map((dropItem) => {
                              return (
                                <div
                                  key={dropItem?.emailId}
                                  id={dropItem?.emailId}
                                  onClick={() => {
                                    SelectedOrganizer(data.candidateId, dropItem.emailId);
                                    dispatch(addOrganEmail(dropItem.emailId));
                                    dispatch(addOrgNameChng(dropItem.name));
                                    setNameChange(data.candidateId);
                                    console.log('CANDIDATE ID', data.candidateId)
                                    console.log(dropItem.emailId);
                                  }}
                                  className="dropdown-data"
                                  href="#"
                                >
                                  <img
                                    src={dropItem.photoUrl}
                                    className="drop-img"
                                    alt=""
                                  />
                                  <p>{dropItem.name}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </span>
                    </div>
                  </table>
                );
              })
              : page?.data?.info?.map((data) => {
                return (
                  <table className="row-data" key={data?.candidateId} id={data?.candidateId}>
                    <div className="row-col-body">
                      <span className="Name-row">{data?.name}</span>

                      <span className={data?.status === 'CLOSED' ? "position-closed" : "desig-closed"} >
                        {data?.designation}
                      </span>
                      <span className="nithin-anand">{data?.location}</span>
                      <span className="nithin-anand">{data?.assignDate}</span>
                      <span className="nithin-a">
                        {nameChange === data.candidateId ? orgNewName : data?.organizer}
                        <div
                          class="dropdown"
                          onClick={() => {
                            dispatch(addCandidateId(data.candidateId));
                            console.log(data.candidateId);
                          }}
                        >
                          <i class="arrow down"></i>
                          <div class="dropdown-content">
                            {org?.data?.info?.map((dropItem) => {
                              return (
                                <div
                                  key={dropItem?.emailId}
                                  id={dropItem?.emailId}
                                  onClick={() => {
                                    SelectedOrganizer(data.candidateId, dropItem.emailId);
                                    dispatch(addOrganEmail(dropItem.emailId));
                                    dispatch(addOrgNameChng(dropItem.name));
                                    setNameChange(data.candidateId);
                                    console.log('CANDIDATE ID', data.candidateId)
                                    console.log(dropItem.emailId);
                                  }}
                                  className="dropdown-data"
                                  href="#"
                                >
                                  <img
                                    src={dropItem.photoUrl}
                                    className="drop-img"
                                    alt=""
                                  />
                                  <p>{dropItem.name}</p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </span>
                    </div>
                  </table>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Assignboard;
