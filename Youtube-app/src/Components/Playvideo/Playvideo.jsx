import React from 'react'
import './Playvideo.css'

import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'



const Playvideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best YouTube Channel To Learn Web Development</h3>
            <div className="play-video-info">
                <p>1525 Views &bull; 2 days ago</p>
            </div>

            <div>
                <span><img src={like} alt="" />125</span>
                <span><img src={dislike} alt="" />2</span>
                <span><img src={share} alt="" />share</span>
                <span><img src={save} alt="" />save</span>
            </div>




        </div>
    )
}

export default Playvideo