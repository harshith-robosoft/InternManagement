import React from "react";
import logo from "../../../assets/images/img_Robosoft logo_registration.png";
import camera from "../../../assets/images/icn_upload_profile.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addInstitute, addProfileLink, getInstitute, getProfileLink } from "../../../features/RegisterSlice";
const Registerpg3 = () => {
  const dataprofileLink = useSelector(getProfileLink);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="registration-container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="welcome-detail">
          <span> Welcome to Robosoft!</span>
          <p>Enter your Details here</p>
        </div>

        <div className="registerpg1-container">
          <div className="software-skill-div">
            <div className="software">
              <span className="input-name-rg">Software you worked</span>
              <textarea
                placeholder="Enter softwares you are good at"
                type="text"
                className="input-software"
              />
            </div>

            <div className="software">
              <span className="input-name-rg">Feature Skills</span>
              <textarea
                placeholder="Enter your Skills"
                type="text"
                className="input-software"
              />
            </div>
          </div>
          <div className="about-you-div">
            <span className="input-name-rg">About You</span>
            <textarea
              type=""
              placeholder="Your Message"
              className="about-you-input"
            />
          </div>
          {dataprofileLink.map((data) => {
            return (
          <div className="fb-lkdin-div">
            <div className="input-container">
              <span className="input-name-rg">Link name</span>
              <input
                placeholder="Enter link Name"
                type="text"
                className="input-rg"
                style={{ color: "#C1BEBE" }}
              />
            </div>

            <div className="input-container">
              <span className="input-name-rg">Link</span>
              <input
                placeholder="Enter link here"
                type="text"
                className="input-rg"
                style={{ color: "#C1BEBE" }}
              />
            </div>
          </div>
            );
          })}
          <p
            className="add"
            onClick={() => {
                dispatch(addProfileLink("2"));
            }}
          >
            + Add Other Instituation
          </p>
          <div className="current-expected">
            <div className="current-ctc-box">
              <span className="input-name-rg">Current CTC</span>
              <div class="currency-wrap">
                <span class="currency-code">₹</span>
                <input
                  placeholder="Enter your current CTC"
                  type="number"
                  class="text-currency"
                />
              </div>
            </div>

            <div className="current-ctc-box">
              <span className="input-name-rg">Expected CTC</span>
              <div class="currency-wrap">
                <span class="currency-code">₹</span>
                <input
                  placeholder="Enter your expected CTC"
                  type="number"
                  class="text-currency"
                />
              </div>
            </div>
          </div>
          <div className="attachment-profile-div">
            <div className="attach">
              <span className="education">Attachments</span>
              <span className="attach-max">Maximum upload Size 5MB</span>
              <div type="text" className="dotted-input-attach">
                <span
                  style={{ height: "36px", width: "173px" }}
                  className="drag-drop"
                >
                  Drag or Drop to Upload ur CV, Photo and Work File{" "}
                </span>
                <span className="drag-drop">or</span>
                <div>
                  <label for="inputUpload" class="custom-file-upload">
                    Browse
                  </label>
                  <input id="inputUpload" type="file" />
                </div>
              </div>
            </div>

            <div className="attach">
              <span className="education">Profile Image</span>
              <span className="attach-max">File Format jpg or png</span>
              <div type="text" className="dotted-input">
                <label for="inputUpload" class="custom-file-upload" >
                <img className="camera" src={camera} alt="pic" />
                </label>
                <input id="inputUpload" type="file" />
              </div>
            </div>
          </div>

          <div className="back-conti-div-rg3">
            <div className="btn-continue">
              <button className="back-conti-btn">
                <p  onClick={() => {                    
                    navigate("/Registerpg2");
                  }}>Back</p>
              </button>
            </div>
            <div className="btn-continue">
              <button className="back-conti-btn">
                <p>Submit</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registerpg3;
