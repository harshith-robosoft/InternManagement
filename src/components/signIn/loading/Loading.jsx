import React from 'react'
import './loading.css'
import robosoft from "../../../assets/images/img_Robosoft logo_ref.png"
import robo from "../../../assets/images/img_robosoftlogo.png"

const Loading = () => {
  return (
    <div className="Loading">
      <svg
        className="Loading-play"
        width={66}
        height={83}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      
      </svg>
      <h2 style={{ marginTop: '50px', color: 'var(--error)' }}>
        <img src={robo} alt="" />
      </h2>
    </div>
  )
}

export default Loading