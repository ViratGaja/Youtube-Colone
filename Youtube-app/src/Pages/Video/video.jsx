import React from 'react'
import './video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommended from '../../Components/Recommended/Recommended'
const video = () => {
  return (
    <div className='play-container'>
      <Playvideo/>
      <Recommended/>
      
    </div>
  )
}

export default video