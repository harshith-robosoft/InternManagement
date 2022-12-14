import React from "react";
import "./FirstScreen.css";
import logo from "../../../assets/images/img_Robosoft logo_ref.png"
import recruiterLogo from "../../../assets/images/icn_Recruiter_selected.png"
import organizerLogo from "../../../assets/images/icn_Organizer_unselected.png"
import approvalLogo from "../../../assets/images/icn_Approval_unselected.png"
import arrowImage from "../../../assets/images/icn_nextbtn_arrow.png"
import { useDispatch } from "react-redux";
import { giveName } from "../../../features/RegisterSlice"
import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";

const FirstScreen = () => {
  const [name, setName] = useState("Recruiter");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [rec, setRec] = useState(true);

  const [org, setOrg] = useState(false);

  const [appAuth, setAppAuth] = useState(false);
  useEffect(() => {
    dispatch(giveName(name));
  }, [name]);
  return (
    <>

<div className="internmanage-container">
      <div className="robosoft-intern-div">
        <img src={logo} alt="" />
        <p>INTERN MANAGEMENT</p>
      </div>

      <div className="FirstScreen-div">
        <div className="FirstScreen-Logos">
          <div style={{ border: rec ? '2px solid rgb(245, 40, 81)' : '' }}  onClick={() => { setName("Recruiter"); setRec(true); setOrg(false); setAppAuth(false) }} className="FirstScreen-LogoBorder">
            <img
              src={recruiterLogo}
              alt="recruiterLogo"
              className="FirstScreen-LogoImage"
            />

            <div className="FirstScreen-LogoImageName">Recruiter</div>
          </div>

          <div style={{ border: org ? '2px solid rgb(245, 40, 81)' : '' }}   onClick={() => { setName("Organizer"); setRec(false); setOrg(true); setAppAuth(false) }} className="FirstScreen-LogoBorderTwo">
            <img
              src={organizerLogo}
              alt="organizerLogo"
              className="FirstScreen-LogoImageTwo"
            />

            <div className="FirstScreen-LogoImageNameTwo">Organizer</div>
          </div>
          <div style={{ border: appAuth ? '2px solid rgb(245, 40, 81)' : '' }}   onClick={() => { setName("Approval Authority"); setRec(false); setOrg(false); setAppAuth(true) }} className="FirstScreen-LogoBorderThree">
            <img
              src={approvalLogo}
              alt="approvalLogo"
              className="FirstScreen-LogoImageTwo"
            />

            <div className="FirstScreen-LogoImageNameTwo">
              Approval <br />
              Authority
            </div>
          </div>
        </div>

        <button onClick={() => {

{

  if (name !== "")

    navigate("/signin")

}

}} className="FirstScreen-NextButton">
          <div className="FirstScreen-NextText">
            Next
            <img src={arrowImage} alt="arrowImage" />
          </div>
        </button>

        <div className="FirstScreen-SignUpTextDiv">
          <div className="FirstScreen-NewInternText">
            New to Intern Management&nbsp;?
          </div>
          <div className="FirstScreen-SignUpText">SIGNUP</div>
        </div>
      </div>
    </div>

      
    </>
  );
};

export default FirstScreen;
