import React from "react";
import "./InternManage.css";
import logo from "../../../assets/images/img_Robosoft logo_ref.png"
import ChangePassword from "../../../components/signIn/changePassword/ChangePassword";
import Verify from "../../../components/signIn/verifyOTP/Verify";
import SuccessPassword from "../../../components/signIn/successPassword/SuccessPassword";
import FirstScreen from "../../../components/signIn/firstScreen/FirstScreen";
const InternManage = () => {
  return (
    <div className="internmanage-container">
      <div className="robosoft-intern-div">
        <img src={logo} alt="" />
        <p>INTERN MANAGEMENT</p>
      </div>

      {/* <ChangePassword/> */}
      {/* <Verify/> */}
      {/* <SuccessPassword /> */}
      {/* <FirstScreen/> */}
    </div>
  );
};

export default InternManage;
