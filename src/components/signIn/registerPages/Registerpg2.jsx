import React from "react";
import "./Registerpg.css";
import logo from "../../../assets/images/img_Robosoft logo_registration.png";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addcompany,
  addInstitute,
  getcompany,
  getInstitute,
} from "../../../features/RegisterSlice";
const Registerpg2 = () => {
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
          <span id="myList1" className="work-history">
            Work History
          </span>
          {datacompany.map((data) => {
            return (
              <>
                <div id="myList2" className="work-box">
                  <div className="company-pos">
                    <div className="input-container">
                      <span className="input-name">Company</span>
                      <input
                        placeholder="Company Name"
                        type="text"
                        className="input-rg"
                      />
                    </div>

                    <div className="input-container">
                      <span className="input-name">Position</span>
                      <input
                        placeholder="Job Title"
                        type="text"
                        className="input-rg"
                      />
                    </div>
                  </div>

                  <div className="from-to-locate">
                    <div className="from-to">
                      <div className="input-container">
                        <span className="input-name">From</span>
                        <input
                          placeholder="(DD/MM/YYYY)"
                          type="date"
                          className="from"
                          style={{ color: "#C1BEBE" }}
                        />
                        {/* <input className="from" type="text" onfocus="(this.type='date')" placeholder="(DD/MM/YYYY)" formControlName="dob" /> */}
                      </div>
                      <div className="input-container">
                        <span className="input-name">To</span>
                        <input
                          placeholder="(DD/MM/YYYY)"
                          type="date"
                          className="from"
                          style={{ color: "#C1BEBE" }}
                        />
                      </div>
                    </div>
                    <div className="input-container">
                      <span className="input-name">Location</span>
                      <input
                        placeholder="Enter Location"
                        type="text"
                        className="input-rg"
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <p
            className="add"
            onClick={() => {
              dispatch(addcompany("2"));
            }}
          >
            + Add Other Company
          </p>

          <span className="education">Education</span>
          {dataInstitute.map((data) => {
            return (
              <>
                <div id="myList2" className="work-box">
                  <div className="company-pos">
                    <div className="input-container">
                      <span className="input-name">Institution</span>
                      <input
                        placeholder="Institution Name"
                        type="text"
                        className="input-rg"
                      />
                    </div>

                    <div className="input-container">
                      <span className="input-name">Grade</span>
                      <input
                        placeholder="Grade"
                        type="text"
                        className="input-rg"
                      />
                    </div>
                  </div>

                  <div className="from-to-locate">
                    <div className="from-to">
                      <div className="input-container">
                        <span className="input-name">From</span>
                        <input
                          placeholder="(DD/MM/YYYY)"
                          type="date"
                          className="from"
                          style={{ color: "#C1BEBE" }}
                        />
                        {/* <input className="from" type="text" onfocus="(this.type='date')" placeholder="(DD/MM/YYYY)" formControlName="dob" /> */}
                      </div>
                      <div className="input-container">
                        <span className="input-name">To</span>
                        <input
                          placeholder="(DD/MM/YYYY)"
                          type="date"
                          className="from"
                          style={{ color: "#C1BEBE" }}
                        />
                      </div>
                    </div>
                    <div className="input-container">
                      <span className="input-name">Location</span>
                      <input
                        placeholder="Enter Location"
                        type="text"
                        className="input-rg"
                      />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <p
            className="add"
            onClick={() => {
              dispatch(addInstitute("2"));
            }}
          >
            + Add Other Instituation
          </p>

          <span className="address-name">Address</span>
          <textarea
            type=""
            placeholder="Enter your Address"
            className="address"
          />
          <div className="state-pincode">
            <div className="input-container">
            
              <input
                placeholder="State"
                type="number"
                className="input-rg"
              />
            </div>
           
            <div className="input-container">
              <input
                placeholder="Pincode"
                type="number"
                className="input-rg"
              />
            </div>
          </div>

          <div className="back-conti-div">
          <div className="btn-continue">
        <button className="back-conti-btn">
          <p   onClick={() => {
                    
                      navigate("/Registerpg1");
                    }}>Back</p>
        </button>
      </div>
      <div className="btn-continue">
        <button className="back-conti-btn">
          <p onClick={() => {                    
                    navigate("/Registerpg3");
                  }}>Continue</p>
        </button>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registerpg2;
