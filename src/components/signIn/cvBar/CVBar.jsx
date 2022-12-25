import React, { useState, useEffect } from "react";
import "./CVBar.css";
import search from "../../../assets/images/icn_search.png";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { addTech } from "../../../features/cvAnalysisSlice";
import { useDispatch } from "react-redux";

const CVBar = () => {
  const [techList, setTechList] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    getTopTech().then((data) => {
      // console.log(data);
      setTechList(data);
    });
  }, []);

  const tech = useSelector((state) => state.cv.tech);

  const topTech =
    "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/top-technologies/" +
    tech;

  const getTopTech = async () => {
    try {
      const response = await axios.get(topTech, {
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
      <div className="CVBar-mainDiv">
        <div className="CVBar-mainDivHeader">
          <div className="CVBar-headerText">CV Analysis</div>
          <div className="searchBackgroundCV">
            <img className="CVBar-searchIcon" src={search} alt="searchImage" />
          </div>
        </div>
        <hr className="CVBar-border"></hr>

        <div className="CVBar-Links">
          {techList?.info.map((tech) => {
            return (
              <div
                className="CVBar-UIcategory"
                onClick={() => {
                  dispatch(addTech(tech?.designation));
                }}
              >
                <div className="CVBar-UIText">{tech?.designation}</div>
                <div className="CVBar-UILocation">
                  {tech?.location.toString().replaceAll(",", "/")}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CVBar;
