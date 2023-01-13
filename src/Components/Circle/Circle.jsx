import React from 'react'
import './Circle.css'

const Circle = ( {number,text}) => {
  return (
    <div className='experience'>
        <div className="circle">{number}</div>
        <div className='text'>{text}</div>
      
    </div>
  )
}

export default Circle
