import React, { useState, useEffect } from "react";
import axios from "axios";
import searchIcon from "../../../assets/images/icn_search.png";
import orgprofile from "../../../assets/images/icn_raksha.png";
import locationicn from "../../../assets/images/icn_location_sentinvite.png";
import emailicn from "../../../assets/images/icn_email_sentinvite.png";
import {
  cardDataByPrevMonth,
  cardDataByYear,
  profileInf,
} from "../../../services/SendInvite";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncSearchInvitePgYear, getsearchYear } from "../../../features/dashBoardSlice";
const SendInvite6 = () => {
  const [prof, setProf] = useState("");
  const [year, setYear] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const dispatch = useDispatch()
  useEffect(() => {
    //   let currentDate =  moment().format('YYYY-MM-DD');
    const cardInfo = async () => {
        let currentDate = moment().subtract(1, 'years').format("YYYY-MM-DD");
      let response = await axios
        .all([profileInf(), cardDataByYear(currentDate)])
        .then(
          axios.spread((...responses) => {
            const profileData = responses[0];
            const cardYearData = responses[1];
            // const pageData = responses[1];
            // const orgData = responses[2];

            setProf(profileData);
            setYear(cardYearData);
            // setpage(pageData);
            // setOrg(orgData);
            // setInvCount(inviteCountData)
          })
        )
        .catch((errors) => {
          // react on errors.
        });
    };
    cardInfo();
  }, []);
  console.log("proffData pg 6 month", prof);
  console.log(" card data pg 6 month", year);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchAsyncSearchInvitePgYear(inputValue));
    setshowsearch(!showsearch);
  };
  const getYearsearch = useSelector(getsearchYear);
  console.log("year search", getYearsearch);

  return (
    <div className="right-si-main-2">
      <div className="header-si-2">
        <span style={{ color: "black" }} className="send-invite-font">
          Sent Invite 
        </span>
        <div className="r-invite-search-name-div">
          <div className="search-box">
            <div style={{ marginTop: "1px" }} className="search-img-outer-red">
              <img className="search-icn-red" src={searchIcon} alt="pic" />
            </div>
            <form onSubmit={handleSubmit}>
            <input
              placeholder="Search"
              className="input-ab"
              type="text"
              style={{ marginTop: "1px" }}
            />
            </form>
          </div>

          <div className="R-profile-div">
            <div className="dash-header-R-si">
              <div className="profile-l-ab">
                {/* <span className="hello">Hello</span> */}
                <span className="renuka-shetty">
                {prof?.data?.info?.name}
                  <i class="arrow down"></i>
                </span>
                <p>Recruiter</p>
              </div>
              <div className="profile-pic-div-ab">
                <img className="profile-photo-ab" src={prof?.data?.info?.profileImage} alt="pic" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom-si-1"></div>

      <div className="cards-body">
      {showsearch
          ? getYearsearch?.info?.map((data) => {
              return ( 
                <div className="card-box">
                <div className="card-head">
                  <span className="nav-bar-si-font">{data?.name}</span>
                  <span className="nav-bar-si-font-mini">
                    {data?.designation}
                  </span>
                </div>
                <div className="border-bottom-card-head"></div>
                <div className="icn-name-div">
                  <img
                    style={{ height: "15px", width: "11px", marginTop: "2px" }}
                    src={locationicn}
                    alt=""
                  />
                  <span style={{ marginLeft: "20px" }} className="bangalore-font">
                    {data?.location}
                  </span>
                </div>
                <div className="icn-name-div">
                  <img
                    style={{
                      height: "9.36px",
                      width: "14.4px",
                      marginTop: "5px",
                    }}
                    src={emailicn}
                    alt=""
                  />
                  <span style={{ marginLeft: "20px" }} className="bangalore-font">
                    {data?.email}
                  </span>
                </div>
                <div className="btn-div-resend">
                  <button className="resend-invite-btn">
                    <p> Resend Invite</p>{" "}
                  </button>
                </div>
              </div>
                );
              })

        :year?.info?.map((data) => {
          return (
            <div className="card-box">
              <div className="card-head">
                <span className="nav-bar-si-font">{data?.name}</span>
                <span className="nav-bar-si-font-mini">
                  {data?.designation}
                </span>
              </div>
              <div className="border-bottom-card-head"></div>
              <div className="icn-name-div">
                <img
                  style={{ height: "15px", width: "11px", marginTop: "2px" }}
                  src={locationicn}
                  alt=""
                />
                <span style={{ marginLeft: "20px" }} className="bangalore-font">
                  {data?.location}
                </span>
              </div>
              <div className="icn-name-div">
                <img
                  style={{
                    height: "9.36px",
                    width: "14.4px",
                    marginTop: "5px",
                  }}
                  src={emailicn}
                  alt=""
                />
                <span style={{ marginLeft: "20px" }} className="bangalore-font">
                  {data?.email}
                </span>
              </div>
              <div className="btn-div-resend">
                <button className="resend-invite-btn">
                  <p> Resend Invite</p>{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SendInvite6;