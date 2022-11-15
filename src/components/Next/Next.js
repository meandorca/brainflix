import './Next.scss'
import videoSum from '../../Data/videos.json'
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

function Next({ video, setVideo, videoDetails }) {

  let videoid = useParams().MainVideo || videoDetails[0].id;

  const filterNext = videoSum.filter(videoNext => videoid != video.id)

  

  return (
    video?
    <>
      <div className="next">
        <p className='next__title'>NEXT VIDEOS</p>
        {videoDetails.map(displaySum =>
        <NavLink  to={'/'+displaySum.id}>
          <div  className='next__content'>
            <img className='next__img' src={displaySum.image} />
            <div className='next__details'>
              <p className='next__details--name'>{displaySum.title}</p>
              <p>{displaySum.channel}</p>
            </div>
          </div>
        </NavLink>
        )
        }
      </div>
    </>
    :''
  )
}

export default Next 