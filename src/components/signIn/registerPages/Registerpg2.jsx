import React from "react";
import "./Registerpg.css";
import logo from "../../../assets/images/img_Robosoft logo_registration.png";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  addcompany,
  addInstitute,
  getcompany,
  getInstitute,
} from "../../../features/RegisterSlice";
import { addWorkHistory, getWorkInfo } from "../../../features/multiStepForm";
const Registerpg2 = () => {
  const secondStepDetails = useSelector(getWorkInfo);
  console.log(secondStepDetails);
  const myFunction = (e) => {
    e.preventDefault();
    const node = document.getElementById("a").lastChild;
    const clone = node.cloneNode(true);
    document.getElementById("myList2").appendChild(clone);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const datacompany = useSelector(getcompany);
  const dataInstitute = useSelector(getInstitute);
  //   console.log(data);

  const initialValues = {
    workHistories: [""],
    educations: [""],
    address: {},
    // "address.state": "",
    // "address.pinCode": "",
    // "address.content": "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter Event Title"),
    dob: Yup.string().required("Please enter Institute name"),
    location: Yup.string().required("Please enter Institute Location"),
    date: Yup.string().required("Please enter Date & time"),
    period: Yup.string().required("Please enter d"),
    description: Yup.string().required("Please enter description"),
    // members:Yup.string().required("Please enter d"),
  });


  const getInitialValues = () => {
    if (secondStepDetails?.educations !== undefined) {
      return {
        ...secondStepDetails,
      };
    }
    return {
      ...initialValues,
    };
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
        <Formik
          initialValues={getInitialValues()}
          validationSchema
          onSubmit={(values) =>
            // setTimeout(() => {
            //   // alert(JSON.stringify(values, null, 2));
            //   console.log(values);
            // }, 500)
            {
              dispatch(addWorkHistory(values));
              navigate("/Registerpg3");
            }
          }
        >
          {({ values }) => (
            <Form>
              <div className="registerpg1-container">
                <FieldArray
                  name="workHistories"
                  render={(arrayHelpers) => (
                    <>
                      {values.workHistories.map((work, index) => (
                        <div id={index} key={`workHistories[${index}]`}>
                          <span id="myList1" className="work-history">
                            Work History
                          </span>
                          {/* {datacompany.map((data) => {
                return ( */}
                          <>
                            <div id="myList2" className="work-box">
                              <div className="company-pos">
                                <div className="input-container">
                                  <span className="input-name">Company</span>
                                  <Field
                                    placeholder="Company Name"
                                    type="text"
                                    className="input-rg"
                                    name={`workHistories.${index}.company`}
                                  />
                                </div>

                                <div className="input-container">
                                  <span className="input-name">Position</span>
                                  <Field
                                    placeholder="Job Title"
                                    type="text"
                                    className="input-rg"
                                    name={`workHistories.${index}.position`}
                                  />
                                </div>
                              </div>

                              <div className="from-to-locate">
                                <div className="from-to">
                                  <div className="input-container">
                                    <span className="input-name">From</span>
                                    <Field
                                      placeholder="(DD/MM/YYYY)"
                                      type="date"
                                      className="from"
                                      style={{ color: "#C1BEBE" }}
                                      name={`workHistories.${index}.fromDate`}
                                    />
                                    {/* <input className="from" type="text" onfocus="(this.type='date')" placeholder="(DD/MM/YYYY)" formControlName="dob" /> */}
                                  </div>
                                  <div className="input-container">
                                    <span className="input-name">To</span>
                                    <Field
                                      placeholder="(DD/MM/YYYY)"
                                      type="date"
                                      className="from"
                                      style={{ color: "#C1BEBE" }}
                                      name={`workHistories.${index}.toDate`}
                                    />
                                  </div>
                                </div>
                                <div className="input-container">
                                  <span className="input-name">Location</span>
                                  <Field
                                    placeholder="Enter Location"
                                    type="text"
                                    className="input-rg"
                                    name={`workHistories.${index}.location`}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                          {/* );
            })} */}
                        </div>
                      ))}
                      <p
                        className="add"
                        onClick={() => {
                          arrayHelpers.push("");
                        }}
                      >
                        + Add Other Company
                      </p>
                    </>
                  )}
                />
                <FieldArray
                  name="educations"
                  render={(arrayHelpers) => (
                    <>
                      {values.educations.map((edu, index) => (
                        <div key={`educations[${index}]`}>
                          <span className="education">Education</span>
                          {/* {datacompany.map((data) => {
              return ( */}
                          <>
                            <div id="myList2" className="work-box">
                              <div className="company-pos">
                                <div className="input-container">
                                  <span className="input-name">
                                    Institution
                                  </span>
                                  <Field
                                    placeholder="Institution Name"
                                    type="text"
                                    className="input-rg"
                                    name={`educations.${index}.institution`}
                                  />
                                </div>

                                <div className="input-container">
                                  <span className="input-name">Grade</span>
                                  <Field
                                    placeholder="Grade"
                                    type="text"
                                    className="input-rg"
                                    name={`educations.${index}.grade`}
                                  />
                                </div>
                              </div>

                              <div className="from-to-locate">
                                <div className="from-to">
                                  <div className="input-container">
                                    <span className="input-name">From</span>
                                    <Field
                                      placeholder="(DD/MM/YYYY)"
                                      type="date"
                                      className="from"
                                      style={{ color: "#C1BEBE" }}
                                      name={`educations.${index}.fromDate`}
                                    />
                                    {/* <input className="from" type="text" onfocus="(this.type='date')" placeholder="(DD/MM/YYYY)" formControlName="dob" /> */}
                                  </div>
                                  <div className="input-container">
                                    <span className="input-name">To</span>
                                    <Field
                                      placeholder="(DD/MM/YYYY)"
                                      type="date"
                                      className="from"
                                      style={{ color: "#C1BEBE" }}
                                      name={`educations.${index}.toDate`}
                                    />
                                  </div>
                                </div>
                                <div className="input-container">
                                  <span className="input-name">Location</span>
                                  <Field
                                    placeholder="Enter Location"
                                    type="text"
                                    className="input-rg"
                                    name={`educations.${index}.location`}
                                  />
                                </div>
                              </div>
                            </div>
                          </>
                          {/* );
          })} */}
                        </div>
                      ))}
                      <p
                        className="add"
                        onClick={() => {
                          arrayHelpers.push("");
                        }}
                      >
                        + Add Other Instituation
                      </p>
                    </>
                  )}
                />
                <span className="address-name">Address</span>
                <Field
                  name="address.content"
                  placeholder="Enter your Address"
                  className="address"
                />
                <div className="state-pincode">
                  <div className="input-container">
                    <Field
                      placeholder="State"
                      type="text"
                      className="input-rg"
                      name="address.state"
                    />
                  </div>

                  <div className="input-container">
                    <Field
                      placeholder="Pincode"
                      type="number"
                      className="input-rg"
                      name="address.pinCode"
                    />
                  </div>
                </div>

                <div className="back-conti-div">
                  <div className="btn-continue">
                    <button  onClick={() => {
                          navigate("/Registerpg1");
                        }} className="back-conti-btn">
                      <p>
                        Back
                      </p>
                    </button>
                  </div>
                  <div className="btn-continue">
                    <button className="back-conti-btn" type="submit">
                      <p
                      // onClick={() => {

                      //   // navigate("/Registerpg3");
                      // }}
                      >
                        Continue
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Registerpg2;
