import React, { useState,useEffect } from "react";
import "./SendInvite.css";
import orgprofile from "../../../assets/images/icn_raksha.png";
import manInvite from "../../../assets/images/img_sendinvite_illustration-2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { cardDataByDay, profileInf } from "../../../services/SendInvite";
import moment from "moment"
import axios from "axios";
import { candidateInvite } from "../../../services/SendInvite";
const SendInvite1 = () => {





  const [prof,setProf]= useState("")

  useEffect(() => {
 
    const cardInfo = async () => {
      let response = await axios
        .all([profileInf()])
        .then(
          axios.spread((...responses) => {
            const profileData = responses[0];
            // const pageData = responses[1];
            // const orgData = responses[2];
  
               setProf(profileData)
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
  // console.log("proffData",prof);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const initialValues = {
    name: "",
    desg: "",
    mobile: "",
    location: "",
    job: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    desg: Yup.string().required("Please enter desgination"),
    mobile: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Please enter mobile number"),
    location: Yup.string().required("Please your Location"),
    job: Yup.string().required("Please your job details"),
    email: Yup.string()
      .email("You have entered a invalid mail address")
      .required("Please enter your email"),
  });

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        // let position = document.querySelector(
        //   '[name="use-radio-group"]:checked'
        // ).value;
        // console.log(position);

        let dataToSend = {
          candidateName: values.name,
          designation: values.desg,
          mobileNumber: values.mobile,
          location: values.location,
          jobDetails: values.job,
          candidateEmail: values.email,
        };
        console.log(values);
        const candidate = await candidateInvite(dataToSend);
        console.log("Received Response", candidate);

        // navigate("/signin")
        // console.log(values);
      },
    });

  const candidateInvite = async (userData) => {
    try {
      const response = await axios.post(
        `https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/candidate-invitation`,
        userData,

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
  return (
    <div className="right-si-main">
      <div className="header-si-1">
        <span className="send-invite-font">Send Invite</span>
        <div className="R-profile-div">
          <div className="dash-header-R-si">
            <div className="profile-l-ab">
              {/* <span className="hello">Hello</span> */}
              <span style={{ color: "white" }} className="renuka-shetty">
                {prof?.data?.info?.name}
                <i style={{ color: "white" }} class="arrow down"></i>
              </span>
              <p>Recruiter</p>
            </div>
            <div className="profile-pic-div-ab">
              <img className="profile-photo-ab" src={prof?.data?.info?.profileImage} alt="pic" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom-si-1"></div>
      <div className="invite-illustartion">
        <img src={manInvite} alt="" />
      </div>
      <div className="form-div-si-1">
        <form onSubmit={handleSubmit}>
          <div className="name-birth-div-siv">
            <div className="input-container-siv">
              <span className="input-name-siv">Name</span>
              <input
              autoComplete="off"
                autofocus="false"
                placeholder="Candidate Name"
                className="input-siv"
                type="name"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {errors.name && touched.name ? (
                  <div className="SignIn-formError">{errors.name}</div>
                ) : null}
            </div>
            <div className="input-container-siv">
              <span className="input-name-siv">Designation</span>
              <input
              autoComplete="off"
                autofocus="false"
                placeholder="Enter his/her Designation"
                type="text"
                className="input-siv"
                id="desg"
                name="desg"
                value={values.desg}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {errors.desg && touched.desg ? (
                  <div className="SignIn-formError">{errors.desg}</div>
                ) : null}
            </div>
          </div>

          <div style={{ marginTop: "22px" }} className="name-birth-div-siv">
            <div className="input-container-siv">
              <span className="input-name-siv">Mobile Number</span>
              <input
              autoComplete="off"
                autofocus="false"
                placeholder="Enter Candidate Mobile Number"
                type="text"
                className="input-siv"
                id="mobile"
                name="mobile"
                maxLength="10"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {errors.mobile && touched.mobile ? (
                  <div className="SignIn-formError">{errors.mobile}</div>
                ) : null}
            </div>
            <div className="input-container-siv">
              <span className="input-name-siv">Location</span>
              <input
              autoComplete="off"
                autofocus="false"
                placeholder="Enter Job Location"
                type="text"
                className="input-siv"
                id="location"
                name="location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {errors.location && touched.location ? (
                  <div className="SignIn-formError">{errors.location}</div>
                ) : null}
            </div>
          </div>

          <div style={{ marginTop: "22px" }} className="name-birth-div-siv">
            <div className="div-row-to-col">
              <span className="input-name-siv">Job Detail</span>
              <textarea
              autoComplete="off"
                autofocus="false"
                placeholder="Enter Job Details here"
                type="text"
                id="job"
                name="job"
                value={values.job}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ height: "100px", padding: "0.5rem" }}
                className="input-siv"
              />
                  {errors.job && touched.job ? (
                  <div className="SignIn-formError">{errors.job}</div>
                ) : null}
            </div>
          </div>
          <div style={{ marginTop: "22px" }} className="name-birth-div-siv">
            <div className="input-container-siv">
              <span className="input-name-siv">Email ID</span>
              <input
              autoComplete="off"
                autofocus="false"
                placeholder="Candidate Email ID "
                type="email"
                className="input-siv"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
                {errors.email && touched.email ? (
                  <div className="SignIn-formError">{errors.email}</div>
                ) : null}
            </div>
            <div className="input-container-siv">
              <span style={{ color: "#121432" }} className="input-name-siv">
                .
              </span>
              <div className="SignUp-buttonField">
                <button style={{ height: "40px",
  width: "250px"}} className="SendInvite-button-IM">
                  <p>Send Invite</p>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendInvite1;
