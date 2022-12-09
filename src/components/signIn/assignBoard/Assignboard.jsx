import React from 'react';
import SideNav from '../sideNavBar/SideNav';
import profile from "../../../assets/images/icn_hr.png";
import "./AssignBoard.css"
import searchIcon from "../../../assets/images/icn_search.png"
const Assignboard = () => {
  return (
 <>
 <div className='outer-black'>
    <SideNav/>
    <div className='outer-white'>
        <div className='header'>
            <span className='assign-board-ab'>Assign Board</span>
            <div className='search-box'>
                <div className='search-img-outer-red'>
                    <img className='search-icn-red' src={searchIcon} alt="pic" />
                          
                </div>
            <input className='input-ab' type="text" />
            </div>
        </div>
    </div>
 </div>
 </>
  )
}

export default Assignboard
