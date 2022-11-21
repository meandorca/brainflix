import './Next.scss'
import { NavLink, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Next({ video, setVideo, videoDetails }) {

  const [nextVideo, setNextVideo] = useState([]);
  const fetchNextVideo = async () => {
    await axios.get('http://localhost:8000/videos')
      .then((response) => {
        setNextVideo(response.data)
      }
      )
  }
  useEffect(() => {
    fetchNextVideo()
  }, [])
  
   const filterNext = nextVideo.filter(videoNext => videoNext.id != video.id)

  return (
    video?
    
      <div className="next">
        <p className='next__title'>NEXT VIDEOS</p>
        {filterNext.map(displaySum =>
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
  
    :''
  )
}

export default Next 