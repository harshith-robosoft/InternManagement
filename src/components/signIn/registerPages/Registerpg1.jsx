import React from "react";
import "./Registerpg.css";
import logo from "../../../assets/images/img_Robosoft logo_registration.png";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  addGeneralInfo,
  getGeneralInfo,
} from "../../../features/multiStepForm";
import { RadioGroup } from "@mui/material";
const Registerpg1 = () => {
  const navigate = useNavigate();
  const firstStepDetails = useSelector(getGeneralInfo);
  console.log(firstStepDetails);
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = React.useState("Referal");

  const handleChanges = (event) => {
    setSelectedValue(event.target.value);
  };

  //   const phoneRegExp =
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  // const StyledFormControlLabel = styled((props) => (
  //   <FormControlLabel {...props} />
  // ))(({ theme, checked }) => ({
  //   ".MuiFormControlLabel-label": checked && {
  //     color: theme.palette.error.main,
  //   },
  // }));

  const initialValues = {
    name: "",
    dob: "",
    mobileNumber: "",
    emailId: "",
    jobLoaction: "",
    gender: "",
    position: "",
    expYear: "",
    expMonth: "",
    // candidateType: "",
    contactPerson: "",
    languagesKnown: "",
  };

  const getInitialValues = () => {
    if (firstStepDetails?.name !== undefined) {
      return {
        ...firstStepDetails,
      };
    }
    return {
      ...initialValues,
    };
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

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: getInitialValues(),
      // validationSchema,
      validateOnChange: true,
      validateOnBlur: false,

      onSubmit: async (values, action) => {
        // console.log(action);
        let dataToSend = {
          name: values.name,
          dob: values.dob,
          mobileNumber: values.mobileNumber,
          emailId: values.emailId,
          jobLocation: values.jobLoaction,
          gender: values.gender,
          position: values.position,
          expYear: values.expYear,
          expMonth: values.expMonth,
          candidateType: selectedValue?.toLocaleLowerCase(),
          contactPerson: values.contactPerson,
          languagesKnown: values.languagesKnown,
        };
        dispatch(addGeneralInfo(dataToSend));
        console.log("sent data", values);
        navigate("/Registerpg2");
        // console.log("get any data ");
        // const memberEvent = await createEventApi(dataToSend);
        // console.log("Received Response", memberEvent);
        // navigate("/signin")
        // console.log(values);
      },
    });
  return (
    <div className="registration-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="welcome-detail">
        <span> Welcome to Robosoft!</span>
        <p>Enter your Details here</p>
      </div>

      <div className="registerpg1-container">
        <form onSubmit={handleSubmit}>
          <div className="name-birth-div">
            <div className="input-container">
              <span className="input-name-rg">Full Name</span>
              <input
                autofocus="false"
                placeholder="Your Good Name"
                type="text"
                className="input-rg"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="input-container">
              <span className="input-name-rg">Date of Birth</span>
              <input
                placeholder="(DD/MM/YYYY)"
                type="date"
                className="input-rg"
                style={{ color: "#C1BEBE" }}
                id="dob"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="number-email-div">
            <div className="input-container">
              <span className="input-name-rg">Mobile Number</span>
              <input
                placeholder="Your Mobile Number"
                type="number"
                className="input-rg"
                id="number"
                name="mobileNumber"
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className="input-container">
              <span className="input-name-rg">Email ID</span>
              <input
                placeholder="Your Mail ID"
                type="email"
                className="input-rg"
                id="emailId"
                name="emailId"
                value={values.emailId}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="location-gender-div">
            <div className="input-container">
              <span className="input-name-rg">Job Location</span>
              <select
                id="jobLoaction"
                name="jobLoaction"
                value={values.jobLoaction}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input-drop"
              >
                <option value="udupi">Udupi</option>
                <option value="banglore">Banglore</option>
                <option value="mumbai">Mumbai</option>
              </select>
            </div>

            <div className="input-container">
              <span className="input-name-rg">Gender</span>
              <select
                id="gender"
                name="gender"
                // value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                className="input-drop"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="what-previous">
            <div className="input-container">
              <span className="input-name-rg">
                What position you are applying for?
              </span>
              <input
                placeholder="Designation"
                type="text"
                className="input-rg"
                id="position"
                name="position"
                value={values.position}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <span className="input-name-rg">Previous Experience</span>
              <div className="year-month-div">
                <input
                  placeholder="Year"
                  className="year"
                  type="text"
                  id="expYear"
                  name="expYear"
                  value={values.expYear}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <input
                  placeholder="Months"
                  className="month"
                  type="text"
                  id="expMonth"
                  name="expMonth"
                  value={values.expMonth}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
          </div>

          <div className="radio-btn-div">
            <div className="radio-btn">
              <Radio
                checked={selectedValue === "Referal"}
                onChange={handleChanges}
                value="Referal"
                name="candidateType"
                inputProps={{ "aria-label": "A" }}
                sx={{
                  color: "#f00",
                  "&.Mui-checked": {
                    color: "#f00",
                  },
                }}
              />
              <label for="referal">Referal</label>
            </div>
            <div className="radio-btn">
              <Radio
                checked={selectedValue === "Walkin"}
                onChange={handleChanges}
                value="Walkin"
                name="candidateType"
                inputProps={{ "aria-label": "B" }}
                sx={{
                  color: "#f00",
                  "&.Mui-checked": {
                    color: "#f00",
                  },
                }}
              />
              <label for="walkin">Walkin</label>
            </div>
            <div className="radio-btn">
              <Radio
                checked={selectedValue === "Campus Interview"}
                onChange={handleChanges}
                value="Campus Interview"
                name="candidateType"
                inputProps={{ "aria-label": "C" }}
                sx={{
                  color: "#f00",
                  "&.Mui-checked": {
                    color: "#f00",
                  },
                }}
              />

              <label for="walkin">Campus Interview</label>
            </div>

            {/* <div className="radio-btn">
          <input type="radio" id="referal" name="fav_language" value="HTML" />
          <label for="referal">Referal</label>
        </div>
        <div>
          <input type="radio" id="referal" name="fav_language" value="CSS" />
          <label for="walkin">Walkin</label>
        </div>
        <div>
          <input
            type="radio"
            id="referal"
            name="fav_language"
            value="JavaScript"
          />
          <label for="campus">Campus Interview</label>
        </div> */}
          </div>

          <div className="name-desig-div">
            <span className="input-name-rg">
              Name and Designantion of Contact Person in Company
            </span>
            <input
              className="name-desig"
              placeholder="Enter Reference Name,Designation, Number and Email ID"
              id="contactPerson"
              name="contactPerson"
              value={values.contactPerson}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="name-desig-div">
            <span className="input-name-rg">Languages you know</span>
            <input
              className="name-desig"
              placeholder="Enter Language you speak/read/write"
              id="languagesKnown"
              name="languagesKnown"
              value={values.languagesKnown}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="btn-continue">
            <button
              // onClick={() => {
              //   navigate("/Registerpg2");
              // }}
              type="submit"
              className="button-IM"
            >
              <p>Continue</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registerpg1;
