import './Home.scss';
import MainVideo from '../../components/MainVideo/MainVideo';
import Conversation from '../../components/Conversation/Conversation';
import Comments from '../../components/Comments/Comments';
import Next from '../../components/Next/Next';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Home({video,setVideo}) {

  const [videoDetails, setVideoDetails] = useState([]);
  const fetchAllVideo = async() => {
    await axios.get(`http://localhost:8000/videos`)
    .then((response) => {
      setVideoDetails(response.data)
    })
  }

  useEffect(  () => {
    fetchAllVideo()
  },[])

  const activeVideo = useParams().MainVideo || videoDetails[0]?.id ; 
  if (activeVideo){
    let MatchVideo = videoDetails.find(ele => ele.id === activeVideo)
    setVideo (MatchVideo)
  }
 
  const timeConvert = (time) => {
    return new Intl.DateTimeFormat('en-US').format(time)
  }

  return (

      <div className="home">
          <MainVideo video={video} timeConvert={timeConvert} />
          <div className='app__content'>
            <div className='app__words'>
              <Conversation />
              <Comments video={video} timeConvert={timeConvert} />
            </div>
            <Next video={video} setVideo={setVideo} videoDetails={videoDetails} />

          </div>
      </div >

  );
}

export default Home