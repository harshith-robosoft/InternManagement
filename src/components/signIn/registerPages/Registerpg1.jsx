import React from "react";
import "./Registerpg.css";
import logo from "../../../assets/images/img_Robosoft logo_registration.png";
import { useNavigate } from "react-router-dom";
import Radio from '@mui/material/Radio';
const Registerpg1 = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = React.useState('Referal');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (


    <div className='registration-container'>
<div className='logo'>
<img  src= {logo} alt="" />
</div>
<div className='welcome-detail'>
<span> Welcome to Robosoft!</span>
<p>Enter your Details here</p>
</div>

<div className="registerpg1-container">
  <form action="">
      <div className="name-birth-div">
        <div className="input-container">
          <span className="input-name-rg">Full Name</span>
          <input
            autofocus="false"
            placeholder="Your Good Name"
            type="text"
            className="input-rg"
          />
        </div>

        <div className="input-container">
          <span className="input-name-rg">Date of Birth</span>
          <input
            placeholder="(DD/MM/YYYY)"
            type="date"
            className="input-rg"
            style={{ color: "#C1BEBE" }}
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
          />
        </div>

        <div className="input-container">
          <span className="input-name-rg">Email ID</span>
          <input placeholder="Your Mail ID" type="email" className="input-rg" />
        </div>
      </div>

      <div className="location-gender-div">
        <div className="input-container">
          <span className="input-name-rg">Job Location</span>
          <select className="input-drop">
            <option value="udupi">Udupi</option>
            <option value="banglore">Banglore</option>
            <option value="mumbai">Mumbai</option>
          </select>
        </div>

        <div className="input-container">
          <span className="input-name-rg">Gender</span>
          <select className="input-drop">
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
          <input placeholder="Designation" type="email" className="input-rg" />
        </div>
        <div>
          <span className="input-name-rg">Previous Experience</span>
          <div className="year-month-div">
            <input placeholder="Year" className="year" type="text" />
            <input placeholder="Months" className="month" type="text" />
          </div>
        </div>
      </div>

      <div className="radio-btn-div">
        <div className="radio-btn">
      <Radio
        checked={selectedValue === 'Referal'}
        onChange={handleChange}
        value="Referal"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'A' }}
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
        checked={selectedValue === 'Walkin'}
        onChange={handleChange}
        value="Walkin"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'B' }}
        sx={{
          color: "#f00",
          "&.Mui-checked": {
              color: "#f00",
          },}}
      />
      <label for="walkin">Walkin</label>
      </div>
      <div className="radio-btn">
      <Radio
        checked={selectedValue === 'Campus Interview'}
        onChange={handleChange}
        value="Campus Interview"
        name="radio-buttons"
        inputProps={{ 'aria-label': 'C' }}
        sx={{
          color: "#f00",
          "&.Mui-checked": {
              color: "#f00",
          },}}
         
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
        />
      </div>

      <div className="name-desig-div">
        <span className="input-name-rg">Languages you know</span>
        <input
          className="name-desig"
          placeholder="Enter Language you speak/read/write"
        />
      </div>
      <div className="btn-continue">
        <button className="button-IM">
          <p onClick={() => {                    
                    navigate("/Registerpg2");
                  }}>Continue</p>
        </button>
      </div>
      </form>
    </div>

</div>

    
  );
};

export default Registerpg1;



