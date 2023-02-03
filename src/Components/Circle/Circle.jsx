import React from 'react'
import './Circle.css'
import { themeContext } from "../../Context";
import { useContext } from "react";


const Circle = ( {number,text}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='experience' style={darkMode ? {"color":"black"}:null}>
        <div className="circle">{number}</div>
        <div className='text'>{text}</div>
      
    </div>
  )
}

export default Circle
