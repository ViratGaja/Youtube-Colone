import React from 'react'
import './video.css'
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom'
const video = () => {
  const{videoId,categoryId}=useParams();
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId}/>
      <Recommended/>
      
    </div>
  )
}

export default video