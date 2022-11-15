import './Home.scss'
import Upload from '../Upload/Upload'

import Header from '../../components/Header/Header';
import MainVideo from '../../components/MainVideo/MainVideo';
import Conversation from '../../components/Conversation/Conversation';
import Comments from '../../components/Comments/Comments';
import Next from '../../components/Next/Next';
import axios from 'axios'
import videoDetails from '../../Data/video-details.json';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Home({video,setVideo}) {

  const fetchVideo = () => {
    axios.get('https://project-2-api.herokuapp.com/videos?api_key=bd2080cd-f855-4b68-9d24-d4f99e3c828d')
    .then((response) => {
      setVideo(response.data)
      console.log(setVideo)
    }
    ) 
  }

  useEffect(  () => {
    fetchVideo () 
  },[])

  const activeVideo = useParams().MainVideo||"84e96018-4022-434e-80bf-000ce4cd12b8"
  
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