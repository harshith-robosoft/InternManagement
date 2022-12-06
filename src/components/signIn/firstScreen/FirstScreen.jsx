import React from "react";
import "./FirstScreen.css";
import recruiterLogo from "../../../assets/images/icn_Recruiter_selected.png"
import organizerLogo from "../../../assets/images/icn_Organizer_unselected.png"
import approvalLogo from "../../../assets/images/icn_Approval_unselected.png"
import arrowImage from "../../../assets/images/icn_nextbtn_arrow.png"
const FirstScreen = () => {
  return (
    <>
      <div className="FirstScreen-div">
        <div className="FirstScreen-Logos">
          <div className="FirstScreen-LogoBorder">
            <img
              src={recruiterLogo}
              alt="recruiterLogo"
              className="FirstScreen-LogoImage"
            />

            <div className="FirstScreen-LogoImageName">Recruiter</div>
          </div>

          <div className="FirstScreen-LogoBorderTwo">
            <img
              src={organizerLogo}
              alt="organizerLogo"
              className="FirstScreen-LogoImageTwo"
            />

            <div className="FirstScreen-LogoImageNameTwo">Organizer</div>
          </div>
          <div className="FirstScreen-LogoBorderThree">
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

        <button className="FirstScreen-NextButton">
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
    </>
  );
};

export default FirstScreen;
