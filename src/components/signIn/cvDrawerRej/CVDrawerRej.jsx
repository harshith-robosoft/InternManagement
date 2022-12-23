import React, { useState, useEffect } from 'react'
import "./CVDrawerRej.css"
import exp from "../../../assets/images/icn_workexp.png";
import walkin from "../../../assets/images/icn_walkin.png";
import icnLocation from "../../../assets/images/icn_location.png";
import icnSalary from "../../../assets/images/icn_salary.png";
import insta from "../../../assets/images/img_instagram.png";
import fb from "../../../assets/images/img_facebook.png";
import ln from "../../../assets/images/img_likedin.png";
import bribbble from "../../../assets/images/img_dribbble.png";
import behance from "../../../assets/images/img_behance.png";
import photo from "../../../assets/images/img_pdf_thumbnail.png";
import zip from "../../../assets/images/img_zip_thumbnail.png";
import hr from "../../../assets/images/icn_hr.png";
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from "../../../services/BaseUrl";

const CVDrawerRej = () => {

    const [details, setDetails] = useState()
    const [candidateAge, setCandidateAge] = useState()
    const [organizers, setOrganizers] = useState()

    const idApi = useSelector((state) => state.cv.id);

    const findAge = (birthday) => {
        const today = new Date();
        const dob = new Date(birthday);
        const diff = today.getTime() - dob.getTime();
        const years = Math.floor(diff / 31556736000);
        setCandidateAge(years)
    }

    const findExp = (to, from) => {
        const toyr = new Date(to);
        const fromyr = new Date(from);
        const diff = toyr.getTime() - fromyr.getTime();
        const days_diff = Math.floor((diff % 31556736000) / 86400000);
        const yrExp = Math.floor(diff / 31556736000);
        const monthExp = Math.floor(days_diff / 30.4167);
        workYr = yrExp;
        workMonth = monthExp;
    }

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(details?.info?.attachmentUrl).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = details?.info?.attachmentUrl;
                alink.click();
            })
        })
    }

    const candidateId = "https://app-internmanagement-221205180345.azurewebsites.net/intern-management/recruiter/extended-cv/" + idApi;
    const orgApi = `${BASE_URL}/intern-management/recruiter/available-organizers`;

    useEffect(() => {
        getCandidateInfo()
            .then((data) => {
                console.log(data);
                setDetails(data);
                findAge(data?.info?.dob);
            })
    }, [idApi]);

    const availableOrganizers = () =>
        axios.get(orgApi, {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
            },
        });

    useEffect(() => {
        availableOrganizers()
            .then((data) => {
                console.log(data?.data?.info);
                setOrganizers(data?.data?.info);
            })

    }, []);

    const getCandidateInfo = async () => {
        try {
            const response = await axios.get(candidateId,
                {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/JSON",
                        // "Accept": "application/JSON",
                        Authorization: `Bearer ${sessionStorage.getItem("auth")}`,
                    },

                });
            // console.log(response);
            return response?.data;
        }
        catch (error) {
            console.log(error);
        }
    }

    var arrNew = 0;
    var yrs = 0;
    var workYr = 0;
    var workMonth = 0;
    { arrNew = details?.info?.skills.split(',') }

    return (
        <>

            <div className="Drawer-personDetails">

                <div className="Drawer-mainDiv">
                    <div className="Drawer-Photo">
                        <img src={details?.info?.imageUrl} alt="image" className="Drawer-PhotoImg" />
                    </div>
                    <div className="Drawer-PhotoInfo">
                        <div className="Drawer-workInfo">
                            <div className="Drawer-workImg">
                                <img src={exp} alt="image" />
                            </div>
                            <div className="Drawer-workInfoText">
                                <div className="Drawer-workYears">
                                    {details?.info?.expYear}+ Years
                                </div>
                                <div className="Drawer-workExpText">
                                    Work experience
                                </div>
                            </div>
                        </div>

                        <div className="Drawer-workInfo">
                            <div className="Drawer-workImg">
                                <img src={walkin} alt="image" />
                            </div>
                            <div className="Drawer-workInfoText">
                                <div className="Drawer-workYears">
                                    {details?.info?.candidateType}
                                </div>
                                <div className="Drawer-workExpText">
                                    Reference
                                </div>
                            </div>
                        </div>

                        <div className="Drawer-workInfo">
                            <div className="Drawer-workImg">
                                <img src={icnLocation} alt="image" />
                            </div>
                            <div className="Drawer-workInfoText">
                                <div className="Drawer-workYears">
                                    {details?.info?.jobLocation}
                                </div>
                                <div className="Drawer-workExpText">
                                    Work Location
                                </div>
                            </div>
                        </div>

                        <div className="Drawer-workInfo">
                            <div className="Drawer-workImg">
                                <img src={icnSalary} alt="image" />
                            </div>
                            <div className="Drawer-workInfoText">
                                <div className="Drawer-workYears">
                                    {details?.info?.expectedCTC}L per Annum
                                </div>
                                <div className="Drawer-workExpText">
                                    Salary Expectation
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="Drawer-workBorder"></hr>
                    <div className="Drawer-photoContacts">
                        <div className="Drawer-contactText"> Contacts </div>
                        <div className="Drawer-photoMobile"> +91 {details?.info?.mobileNumber}</div>
                        <div className="Drawer-photoMobile"> {details?.info?.emailId}</div>
                    </div>
                    <hr className="Drawer-workBorder"></hr>
                    <div className="Drawer-contactText">Socials</div>
                    <div className="Drawer-photoImages">
                        <img src={bribbble} alt="image" />
                        <img src={behance} alt="image" />
                        <img src={ln} alt="image" />
                        <img src={fb} alt="image" />
                        <img src={insta} alt="image" />
                    </div>
                </div>
                <div className="Drawer-personDeatailInfo">
                    <div className="Drawer-personNameInfo">
                        <div className="Drawer-personName">{details?.info?.name}</div>
                        <div className="Drawer-personyrs">{candidateAge} years</div>
                    </div>
                    <div className="Drawer-personRole">{details?.info?.position}</div>

                    <div className="Drawer-btnPlace">
                        <button className="Drawer-downloadCVbtn" onClick={onButtonClick}>Download CV</button>
                        {/* 
                        <div className="Drawer-dropDownbtn">
                            <button className="Drawer-assignToBtn">Assign To</button>

                            <div className="Drawer-dropdown-content">
                                {organizers?.map((org) => {
                                    return (

                                        <div className="Drawer-hr">
                                            <img src={org?.photoUrl} alt="image" className="Drawer-hrImg" />
                                            <div className="Drawer-hrName">{org?.name}</div>
                                        </div>

                                    )
                                })}
                            </div>
                        </div> */}

                        <button className="Drawer-rejectbtn">Recruit</button>
                    </div>

                    <div className="Drawer-personAbout">{details?.info?.about}</div>
                    <hr className="Drawer-workBorder"></hr>
                    <div className="Drawer-educationInfo">
                        <div className="Drawer-educationText">Work Experience</div>
                        <div className="Drawer-prevComapnyInfo">

                            {details?.info?.workHistories.map((detail) => {
                                findExp(detail?.toDate, detail?.fromDate)
                                return (
                                    <>
                                        <div className="Drawer-prevComapny">
                                            <div className="Drawer-prevComapnyCard">
                                                <div className="Drawer-prevComapnyLogo"> </div>
                                                <div className="Drawer-prevComapnyAlign">
                                                    <div className="Drawer-collegeName">
                                                        {detail?.position}
                                                    </div>
                                                    <div className="Drawer-collegePlace">
                                                        {detail?.company}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="Drawer-collegePlace">
                                                {workYr}y {workMonth}m
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                        <hr className="Drawer-workBorder"></hr>
                    </div>
                    <div className="Drawer-educationInfo">
                        <div className="Drawer-educationText">Education</div>

                        {details?.info?.educations.map((detail) => {
                            var start = new Date(detail?.toDate);
                            var yrs = start.getFullYear();

                            return (
                                <div className="Drawer-collegeInfo">
                                    <div>
                                        <div className="Drawer-collegeName">
                                            {detail?.institution}
                                        </div>
                                        <div className="Drawer-collegePlace">
                                            {detail?.location}
                                        </div>
                                    </div>
                                    <div className="Drawer-collegePlace">{yrs}</div>
                                </div>
                            )
                        })}


                        <hr className="Drawer-workBorder"></hr>
                    </div>
                    <div className="Drawer-referenceInfo">
                        <div className="Drawer-educationText">Reference</div>
                        <div className="Drawer-referencePerson">
                            <div className="Drawer-collegeName">Jeevan Lazarus</div>
                            <div className="Drawer-collegePlace">Crystal Technologies Pvt Ltd. Bangalore</div>
                        </div>
                        <div className="Drawer-referenceContact">
                            <div className="Drawer-referenceContactno">
                                <div className="Drawer-collegePlace"> Phone &nbsp; : &nbsp; </div>
                                <div className="Drawer-refMail"> </div>
                            </div>
                            <div className="Drawer-referenceContactno">
                                <div className="Drawer-collegePlace">Email &nbsp; : &nbsp; </div>
                                <div className="Drawer-refMail"></div>
                            </div>
                        </div>
                        <hr className="Drawer-workBorder"></hr>
                    </div>
                    <div className="Drawer-softwareInfo">
                        <div className="Drawer-educationText">Skills</div>
                        <div className='Drawer-pplSkills'>
                            {arrNew?.map((arr) => {
                                return (
                                    <div className='Drawer-pplSkillItem'>
                                        {arr}
                                    </div>
                                )
                            })}
                        </div>
                        <hr className="Drawer-workBorder"></hr>
                    </div>
                    <div className="Drawer-AttachmentInfo">
                        <div className="Drawer-educationText">Attachment</div>
                        <div className='Drawer-pplSkills'>
                            <div className='Drawer-attachCard'>
                                <img src={photo} alt="image" className='Drawer-thumbnailWidth' />
                                <div className='Drawer-pdfName'>xyz.pdf</div>
                                <div className='Drawer-pdfSize'>200KB</div>
                            </div>

                            <div className='Drawer-attachCard'>
                                <img src={photo} alt="image" className='Drawer-thumbnailWidth' />
                                <div className='Drawer-pdfName'>xyz.pdf</div>
                                <div className='Drawer-pdfSize'>200KB</div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CVDrawerRej