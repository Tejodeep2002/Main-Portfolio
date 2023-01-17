import React from 'react'
import './TopArrow.css'
import UpArrow from '../../images/up-arrow.png'

const TopArrow = () => {
  return (
    <div className='toparrow'>
      <a href='home'><img src={UpArrow} alt="" /></a>
    </div>
  )
}

export default TopArrow
