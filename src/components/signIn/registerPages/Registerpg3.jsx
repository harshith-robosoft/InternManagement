import React, { useState } from "react";
import logo from "../../../assets/images/img_Robosoft logo_registration.png";
import camera from "../../../assets/images/icn_upload_profile.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFalseResponse,
  addInstitute,
  addProfileLink,
  getInstitute,
  getProfileLink,
  getTFResponse,
} from "../../../features/RegisterSlice";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { Formik, Form, Field, FieldArray } from "formik";
import { getGeneralInfo, getWorkInfo } from "../../../features/multiStepForm";
import { createAndGetFormData } from "../../../utils/createAndGetFormData";
import { registerCandidate } from "../../../services/candidateRegister";

const Registerpg3 = () => {
  const dataprofileLink = useSelector(getProfileLink);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const firstStepDetails = useSelector(getGeneralInfo);
  const secondStepDetails = useSelector(getWorkInfo);
  const [cvAttachment, setCvAttachment] = useState(null);
  const [photoAttachment, setPhotoAttachment] = useState(null);
  const requiredResponse = useSelector(getTFResponse);
  const [loading,setLoading] = useState(false)

  const handelPhoto = (e) => {
    setPhotoAttachment(e.target.files[0]);
  };

  const handelCvUpload = (e) => {
    setCvAttachment(e.target.files[0]);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
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
          <Formik
            initialValues={{
              // workHistories: [""],
              // educations: [""],
              // address: {},
              // "address.state": "",
              // "address.pinCode": "",
              // "address.content": "",
              softwareWorked: "",
              skills: "",
              about: "",
              currentCTC: "",
              expectedCTC: "",
              links: [""],
              // attachment: {},
              // photo: {},
            }}
            onSubmit={
              async (values) =>
              
                // setTimeout(() => {
                //   // alert(JSON.stringify(values, null, 2));
                //   console.log(values);
                // }, 500)
                {
                  setLoading(true);
                  let dataToSend = {
                    ...firstStepDetails,
                    ...secondStepDetails,
                    ...values,
                  };
                  console.log(dataToSend);
                  let convertedFormData = createAndGetFormData(dataToSend);
                  if (cvAttachment !== null) {
                    convertedFormData.append(
                      "attachment",
                      cvAttachment,
                      cvAttachment.name
                    );
                  }
                  if (photoAttachment !== null) {
                    convertedFormData.append(
                      "photo",
                      photoAttachment,
                      photoAttachment.name
                    );
                  }
                  convertedFormData.forEach((item) => console.log(item));
                  let result = await registerCandidate(convertedFormData);
                  setLoading(false);
                  console.log(result);
                  dispatch(addFalseResponse(result?.data?.result?.opinion));

                  // console.log(result?.data?.result?.opinion);

                  if (result?.data?.result?.opinion === "T") {
                    // console.log("Inside If", result);
                    navigate("/Regsuccess");
                  }
                }

              // {
              //   // dispatch(addWorkHistory(values));
              //   // navigate("/Registerpg3");
              // }
            }
          >
            {({ values }) => (
              <Form>
                <div className="software-skill-div">
                  <div className="software">
                    <span className="input-name-rg">Software you worked</span>
                    <Field
                      as="textarea"
                      placeholder="Enter softwares you are good at"
                      type="text"
                      required
                      className="input-software"
                      name="softwareWorked"
                    />
                  </div>

                  <div className="software">
                    <span className="input-name-rg">Feature Skills</span>
                    <Field
                      as="textarea"
                      placeholder="Enter your Skills"
                      type="text"
                      required
                      className="input-software"
                      name="skills"
                    />
                  </div>
                </div>
                <div className="about-you-div">
                  <span className="input-name-rg">About You</span>
                  <Field
                    as="textarea"
                    type="text"
                    required
                    placeholder="Your Message"
                    className="about-you-input"
                    name="about"
                  />
                </div>
                {/* {dataprofileLink.map((data) => {
                  return ( */}
                <FieldArray
                  name="links"
                  render={(arrayHelpers) => (
                    <>
                      {values.links.map((link, index) => (
                        <div className="fb-lkdin-div">
                          <div className="input-container">
                            <span className="input-name-rg">Link name</span>
                            <Field
                              placeholder="Enter link Name"
                              type="text"
                              required
                              className="input-rg"
                              style={{ color: "#C1BEBE" }}
                              name={`links.${index}.website`}
                            />
                          </div>

                          <div className="input-container">
                            <span className="input-name-rg">Link</span>
                            <Field
                              placeholder="Enter link here"
                              type="text"
                              required
                              className="input-rg"
                              style={{ color: "#C1BEBE" }}
                              name={`links.${index}.url`}
                            />
                          </div>
                        </div>
                      ))}
                      <p
                        className="add"
                        onClick={() => {
                          arrayHelpers.push("");
                          // dispatch(addProfileLink("2"));
                        }}
                      >
                        + Add Other Instituation
                      </p>
                    </>
                  )}
                />

                {/* );
                })} */}

                <div className="current-expected">
                  <div className="current-ctc-box">
                    <span className="input-name-rg">Current CTC</span>
                    <div class="currency-wrap">
                      <span class="currency-code">₹</span>
                      <Field
                        placeholder="Enter your current CTC"
                        type="number"
                        required
                        class="text-currency"
                        name="currentCTC"
                      />
                    </div>
                  </div>

                  <div className="current-ctc-box">
                    <span className="input-name-rg">Expected CTC</span>
                    <div class="currency-wrap">
                      <span class="currency-code">₹</span>
                      <Field
                        placeholder="Enter your expected CTC"
                        type="number"
                        required
                        class="text-currency"
                        name="expectedCTC"
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
                        <input
                          id="inputUpload"
                          type="file"
                          name="attachment"
                          onChange={handelCvUpload}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="attach">
                    <span className="education">Profile Image</span>
                    <span className="attach-max">File Format jpg or png</span>
                    {/* <div type="text" className="dotted-input">
                      <label for="inputUpload1" class="custom-file-upload">
                        <img className="camera" src={camera} alt="pic" />
                      </label>
                      <input
                        id="inputUpload1"
                        type="file"
                        name="photo"
                        onChange={handelPhoto}
                      />
                    </div> */}
                    <div type="text" className="dotted-input">
                      <label className="custom-file-upload">
                        <img className="camera" src={camera} alt="pic" />

                        <input
                          id="inputUpload1"
                          type="file"
                          name="photo"
                          onChange={handelPhoto}
                          className="camera"
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                {console.log(requiredResponse)}
                {requiredResponse === "F" ? (
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="error"
                      sx={{ width: "100%" }}
                    >
                      Invalid details filled!!
                    </Alert>
                  </Snackbar>
                ) : (
                  " "
                )}

                <div className="back-conti-div-rg3">
                  <div className="btn-continue">
                    <button
                      onClick={() => {
                        navigate("/Registerpg2");
                      }}
                      className="back-conti-btn"
                      type="submit"
                    >
                      <p>Back</p>
                    </button>
                  </div>
                  <div className="btn-continue">
                    <button
                      onClick={handleClick}
                      className="back-conti-btn"
                      type="submit"
                    >
                      {!loading ? <p>Submit</p> : <p>Loading...</p>}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Registerpg3;
