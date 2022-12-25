// import React, { useState } from 'react';
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import Registerpg1 from './Registerpg1';
// import Registerpg2 from './Registerpg2';
// import Registerpg3 from './Registerpg3';

// const RegistrationHandle = () => {
//     const [data, setData] = useState({
//         email: "",
//         date: "",
//         mobile: "",
//         name: "",
//         position: "",
//         year: "",
//         month: "",
//         refInfo: "",
//         refLang: "",
//         place: "",
//         gender: "",
//         companyName:"",
//         positionName:"",
//         fromDateWH:"",
//         toDateWH:"",
//         locationWH:"",
//         iName: "",
//         grade: "",
//         fromDate: "",
//         toDate: "",
//         location: "",
//         address:"",
//         state:"",
//         pincode:"",
//         skills: "",
//         softwareKnown:"",
//         aboutYou:"",   
//         fbLink:"",
//         LinkedinLink:"",
//         currCTC:"",
//         expCTC:"",

//     })

//     const [currentStep, setCurrentStep] = useState(0);
//     const makeRequest = (formData) =>{
//         console.log("form Submitted", formData) // send formData to api here 
//     }

//     const handleNextStep = (newData, final = false) => {
//         setData(prev => ({ ...prev, ...newData }))
        
//         if(final) {
//            makeRequest(newData) 
//            return
//         }

//         setCurrentStep(prev => prev + 1)
//     }

//     const handlePrevStep = (newData) => {
//         setData(prev => ({ ...prev, ...newData }))
//         setCurrentStep(prev => prev - 1)
//     }

//     const step = [
//     <Registerpg1 next={handleNextStep} data={data} />, 
//     <Registerpg2 next={handleNextStep} prev={handlePrevStep} data={data}/>,
//     <Registerpg3 next={handleNextStep} prev={handlePrevStep} data={data} />
//     ];

//     console.log("data",data);

//     return (
//         <>
//             {step[currentStep]}
//         </>
//     );
// };

// export default RegistrationHandle;

