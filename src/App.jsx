import "./App.css";
import React from "react";
import InternManage from "./pages/intern-manage/inter-management/InternManage";
import Registration from "./pages/intern-manage/registration/Registration";
import Registerpg1 from "./components/signIn/registerPages/Registerpg1";
import Verify from "./components/signIn/verifyOTP/Verify";
import SuccessPassword from "./components/signIn/successPassword/SuccessPassword";
import FirstScreen from "./components/signIn/firstScreen/FirstScreen";
import ChangePassword from "./components/signIn/changePassword/ChangePassword";
import SignIn from "./components/signIn/signin/SignIn";
import Registerpg2 from "./components/signIn/registerPages/Registerpg2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/signIn/forgotPassword/ForgotPassword";
import Registerpg3 from "./components/signIn/registerPages/Registerpg3";
import RegisterSuccess from "./components/signIn/registerSuccess/RegisterSuccess";
import DashBoard from "./pages/intern-manage/dashBoard/DashBoard";
import SignUp from "./components/signIn/signup/SignUp";
import SideNav from "./components/signIn/sideNavBar/SideNav";
import Assignboard from "./components/signIn/assignBoard/Assignboard";
import DashOrg from "./pages/intern-manage/dashBoard/DashOrg";
import DashAuth from "./pages/intern-manage/dashBoard/DashAuth";
import CVAnalysisDetails from "./components/signIn/cvAnalysisDetails/CVAnalysisDetails";
import UiUx from "./components/signIn/uiUx/UiUx";
import RejectedCV from "./components/signIn/rejectedCV/RejectedCV";

// import InternManage from "./pages/intern-manage/inter-management/InternManage";

const App = () => {
  return (
    <div>
      {/* <InternManage/> */}
      {/* <Registration/> */}
      {/* <Registerpg1/> */}
      {/* <Verify/> */}
      {/* <SuccessPassword/> */}
      {/* <FirstScreen/> */}
      {/* <ChangePassword/> */}
      {/* <SignIn/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstScreen />}></Route>//chandana
          <Route path="/signin" element={<SignIn />}></Route> //chandana
          <Route path="/signup" element={<SignUp />}></Route> //chandana
          <Route path="/forgotpass" element={<ForgotPassword />}></Route>//chandana
          <Route path="/changepass" element={<ChangePassword />}></Route>
          <Route path="/otp" element={<Verify />}></Route>
          <Route path="/successpass" element={<SuccessPassword />}></Route>
          <Route path="/Registerpg1" element={<Registerpg1 />}></Route>
          <Route path="/Registerpg2" element={<Registerpg2 />}></Route>
          <Route path="/Registerpg3" element={<Registerpg3 />}></Route>
          <Route path="/Regsuccess" element={<RegisterSuccess />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
          <Route path="/dashorg" element={<DashOrg />}></Route>
          <Route path="/dashauth" element={<DashAuth />}></Route>
          <Route path="/assignBoard" element={<Assignboard />}></Route>
          <Route path="/cvAnalysis" element={<CVAnalysisDetails />}></Route>
          <Route path="/UiUx" element={<UiUx />}></Route>
          <Route path="/RejectedCV" element={<RejectedCV />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <SideNav/> */}
      {/* <DumNav/> */}


      {/* <Registerpg1/> */}
    </div>
  );
};

export default App;
