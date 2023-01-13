import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import "./Toggle.css";

const Toggle = () => {
  return (
    <div className='toggle'>
      <NightsStayIcon/>
      <WbSunnyIcon/>
      <div className="t-button"></div>
    </div>
  )
}

export default Toggle
