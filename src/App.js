import './App.scss';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import Conversation from './components/Conversation/Conversation';
import Next from './components/Next/Next';
import Comments from './components/Comments/Comments';
import button from './assets/Icons/upload.svg'
import videoDetails from './Data/video-details.json'
import { useState } from 'react';


function App() {
  const [video, setVideo] = useState(videoDetails[0]);

  const timeConvert = (time) => {
  return new Intl.DateTimeFormat('en-US').format(time)
  }

  

  return (
    <div className="app"> 
    <Header/>
    <MainVideo video= {video} timeConvert={timeConvert} />
    <Conversation/>
    <Comments video= {video} timeConvert={timeConvert}/>
    <Next video= {video} setVideo={setVideo} videoDetails={videoDetails}/>
      
    </div >
  );
}



export default App;

