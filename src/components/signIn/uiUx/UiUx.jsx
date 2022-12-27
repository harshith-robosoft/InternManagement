import React, { useState, useEffect } from "react";
import "./UiUx.css";
import SideNav from "../sideNavBar/SideNav";
import CVBar from "../cvBar/CVBar";
import rejImage from "../../../assets/images/icn_rejected (1).png";
import newImage from "../../../assets/images/icn_new.png";
import shortImage from "../../../assets/images/icn_shortlist.png";
import CVDrawer from "./CVDrawer";
import hr from "../../../assets/images/icn_hr.png";
import arrow from "../../../assets/images/icn_active dropdown.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { addId } from "../../../features/cvAnalysisSlice";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../../services/BaseUrl";
import CVDrawerRej from "./CVDrawerRej";
import CVDrawerShort from "./CVDrawerShort";

const UiUx = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenRej, setIsOpenRej] = React.useState(false);
  const [isOpenShort, setIsOpenShort] = React.useState(false);
  const [newList, setNewList] = useState();
  const [shortList, setShortList] = useState();
  const [rejList, setRejList] = useState();
  const [newInfo, setNewInfo] = useState();
  const [shortInfo, setShortInfo] = useState();
  const [rejInfo, setRejInfo] = useState();
  const [newSkill, setNewSkill] = useState([]);
  const [shortSkill, setShortSkill] = useState([]);
  const [rejSkill, setRejSkill] = useState([]);
  const [profile, setProfile] = useState();
  const dispatch = useDispatch();

  let profileApi = `${BASE_URL}/intern-management/member/logged-profile`;
  const count = useSelector((state) => state.cv.count);

  var newNum = 0;
  var shortNum = 0;
  var rejNum = 0;
  var arrNew = 0;
  var arrShort = 0;
  var arrRej = 0;

  rejNum = rejInfo === null || undefined || NaN ? 0 : rejInfo;
  newNum = newInfo === null || undefined || NaN ? 0 : newInfo;
  shortNum = shortInfo === null || undefined || NaN ? 0 : shortInfo;

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const toggleDrawerShort = () => {
    setIsOpenShort((prevStateShort) => !prevStateShort);
  };

  const toggleDrawerRej = () => {
    setIsOpenRej((prevStateRej) => !prevStateRej);
  };

  const tech = useSelector((state) => state.cv.tech);

  const profileNew =
    `${BASE_URL}/intern-management/recruiter/profiles/` + tech + "/assigned";
  const profileShort =
    `${BASE_URL}/intern-management/recruiter/profiles/` +
    tech +
    "/shortlisted ";
  const profileRej =
    `${BASE_URL}/intern-management/recruiter/profiles/` + tech + "/rejected";

  useEffect(() => {
    getProfileNew().then((data) => {
      console.log(data);
      setNewList(data);
      setNewInfo(data.info.length);
    });
  }, [tech]);

  useEffect(() => {
    getProfileShort().then((data) => {
      console.log(data);
      setShortList(data);
      setShortInfo(data.info.length);
    });
  }, [tech]);

  useEffect(() => {
    getProfileRej().then((data) => {
      console.log(data);
      setRejList(data);
      setRejInfo(data.info.length);
    });
  }, [tech]);

  useEffect(() => {
    getProfileNew().then((data) => {
      console.log(data);

      setNewList(data);

      setNewInfo(data.info.length);
    });
  }, [count]);

  useEffect(() => {
    getProfileShort().then((data) => {
      console.log(data);

      setShortList(data);

      setShortInfo(data.info.length);
    });
  }, [count]);

  useEffect(() => {
    getProfileRej().then((data) => {
      console.log(data);

      setRejList(data);

      setRejInfo(data.info.length);
    });
  }, [count]);

  const profileData = () =>
    axios.get(profileApi, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
      },
    });

  useEffect(() => {
    profileData().then((data) => {
      // console.log(data);
      setProfile(data);
    });
  }, []);

  const totalNum = newNum + shortNum + rejNum;
  const newRes = totalNum === 0 ? 0 : Math.abs((newNum * 100) / totalNum);
  console.log(newRes);
  const short = totalNum === 0 ? 0 : Math.abs((shortNum * 100) / totalNum);
  const rej = totalNum === 0 ? 0 : Math.abs((rejNum * 100) / totalNum);

  const getProfileNew = async () => {
    try {
      const response = await axios.get(profileNew, {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
          // "Accept": "application/JSON",
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
      });
      // console.log(response);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getProfileShort = async () => {
    try {
      const response = await axios.get(profileShort, {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
          // "Accept": "application/JSON",
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
      });
      // console.log(response);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getProfileRej = async () => {
    try {
      const response = await axios.get(profileRej, {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
          // "Accept": "application/JSON",
          Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
        },
      });
      // console.log(response);
      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        size="900px"
        style={{
          "background-color": "#FFFFFF",
          borderRadius: "40px 0px  0px 40px",
          boxShadow: "0 6px 11px 5px rgba(0,0,0,0.07)",
        }}
        className="UiUx-drawer"
      >
        <CVDrawer toggleDrawer={toggleDrawer} />
      </Drawer>

      <Drawer
        open={isOpenShort}
        onClose={toggleDrawerShort}
        direction="right"
        size="900px"
        style={{
          "background-color": "#FFFFFF",
          borderRadius: "40px 0px  0px 40px",
          boxShadow: "0 6px 11px 5px rgba(0,0,0,0.07)",
        }}
        className="UiUx-drawer"
      >
        <CVDrawerShort toggleDrawerShort={toggleDrawerShort} />
      </Drawer>

      <Drawer
        open={isOpenRej}
        onClose={toggleDrawerRej}
        direction="right"
        size="900px"
        style={{
          "background-color": "#FFFFFF",
          borderRadius: "40px 0px  0px 40px",
          boxShadow: "0 6px 11px 5px rgba(0,0,0,0.07)",
        }}
        className="UiUx-drawer"
      >
        <CVDrawerRej toggleDrawerRej={toggleDrawerRej} />
      </Drawer>

      <div className="UiUx-mainDiv">
        <div className="UiUx-mainDivComponents">
          <SideNav />
          <div className="UiUx-assignDiv">
            <CVBar />
            <div className="UiUx-components">
              <div className="UiUx-header">
                <div className="UiUx-CVText">{tech}</div>
                <div className="UiUx-headerRight">
                  <div className="UiUx-CandidateInfo">
                    <div className="UiUx-CandidateData">
                      <div className="UiUx-CandidateName">
                        {profile?.data?.info?.name}
                      </div>
                      <div className="UiUx-CandidateArrow">
                        <img
                          className="UiUx-CandidateArrowImage"
                          src={arrow}
                          alt="arrowImage"
                        />
                      </div>
                    </div>
                    <div className="UiUx-CandidateProfession">
                      {profile?.data?.info?.position}
                    </div>
                  </div>
                  <div>
                    <img
                      src={profile?.data?.info?.profileImage}
                      alt="image"
                      className="UiUx-hrImg"
                    />
                  </div>
                </div>
              </div>
              <hr className="UiUx-headerborder"></hr>
              <div className="UiUx-progressBars">
                <div className="UiUx-newBar UiUxBar">
                  <div
                    className="UiUx-newImageBar"
                    style={{ width: `${newRes}%` }}
                  >
                    <div className="UiUx-newBarInfo">
                      <div>
                        <img
                          className="UiUx-NewImage"
                          src={newImage}
                          alt="arrowImage"
                        />
                      </div>
                      <div className="UiUx-NewText">New</div>
                      <div className="UiUx-newCount UiUxCount">
                        {newNum}/{totalNum}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="UiUx-shortListedBar UiUxBar">
                  <div
                    className="UiUx-shortImageBar"
                    style={{ width: `${short}%` }}
                  >
                    <div className="UiUx-newBarInfo">
                      <div>
                        <img
                          className="UiUx-shortImage"
                          src={shortImage}
                          alt="arrowImage"
                        />
                      </div>
                      <div className="UiUx-shortText">Shortlisted</div>
                      <div className="UiUx-shortCount UiUxCount">
                        {shortNum}/{totalNum}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="UiUx-rejectedBar UiUxBar">
                  <div
                    className="UiUx-rejImageBar"
                    style={{ width: `${rej}%` }}
                  >
                    <div className="UiUx-newBarInfo">
                      <div>
                        <img
                          className="UiUx-rejImage"
                          src={rejImage}
                          alt="arrowImage"
                        />
                      </div>
                      <div className="UiUx-rejText">Rejected</div>
                      <div className="UiUx-rejCount UiUxCount">
                        {rejNum}/{totalNum}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="UiUx-pplList">
                <div className="UiUx-newPplData">
                  {newList?.info.map((newList) => {
                    arrNew = newList?.skills.split(",");
                    return (
                      <div
                        className="UiUx-pplItem"
                        onClick={() => {
                          toggleDrawer();
                          dispatch(addId(newList?.candidateId));
                        }}
                      >
                        <div className="UiUx-pplNameImage">
                          <div>
                            <img
                              src={newList?.imageUrl}
                              className="UiUx-Image"
                            />
                          </div>
                          <div className="UiUx-nameInfo">
                            <div className="UiUx-name">{newList?.name}</div>
                            <div className="UiUx-Position">
                              {newList?.position}
                            </div>
                          </div>
                        </div>
                        <div className="UiUx-pplSkills">
                          {arrNew.map((arr) => {
                            return (
                              <div className="UiUx-pplSkillItem">{arr}</div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="UiUx-newPplData">
                  {shortList?.info.map((shortList) => {
                    arrShort = shortList?.skills.split(",");
                    return (
                      <div
                        className="UiUx-pplItem"
                        onClick={() => {
                          toggleDrawerShort();
                          dispatch(addId(shortList?.candidateId));
                        }}
                      >
                        <div className="UiUx-pplNameImage">
                          <div>
                            <img
                              src={shortList?.imageUrl}
                              className="UiUx-Image"
                            />
                          </div>
                          <div className="UiUx-nameInfo">
                            <div className="UiUx-name">{shortList?.name}</div>
                            <div className="UiUx-Position">
                              {shortList?.position}
                            </div>
                          </div>
                        </div>
                        <div className="UiUx-pplSkills">
                          {arrShort.map((arr) => {
                            return (
                              <div className="UiUx-pplSkillItem">{arr}</div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="UiUx-newPplData">
                  {rejList?.info.map((rejList) => {
                    arrRej = rejList?.skills.split(",");
                    return (
                      <div
                        className="UiUx-pplItem"
                        onClick={() => {
                          toggleDrawerRej();
                          dispatch(addId(rejList?.candidateId));
                        }}
                      >
                        <div className="UiUx-pplNameImage">
                          <div>
                            <img
                              src={rejList?.imageUrl}
                              className="UiUx-Image"
                            />
                          </div>
                          <div className="UiUx-nameInfo">
                            <div className="UiUx-name">{rejList?.name}</div>
                            <div className="UiUx-Position">
                              {rejList?.position}
                            </div>
                          </div>
                        </div>
                        <div className="UiUx-pplSkills">
                          {arrRej.map((arr) => {
                            return (
                              <div className="UiUx-pplSkillItem">{arr}</div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UiUx;
