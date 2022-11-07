import './App.scss';
import logo from './assets/Logo/BrainFlix-logo.svg'
import circle from './assets/Images/Mohan-muruge.jpg'
import button from './assets/Icons/upload.svg'
import videoDetails from './Data/video-details.json'
import { useState } from 'react';
import eye from './assets/Icons/views.svg'
import likes from './assets/Icons/likes.svg'
import videoSum from './Data/videos.json'
import mag from './assets/Icons/search.svg'
import upArrow from './assets/Icons/upload.svg'
import plus from './assets/Icons/add_comment.svg'


function App() {
  const [video, setVideo] = useState(videoDetails[0]);




  return (
    <div className="app">
      <header className="header">
        <img className="header__img" src={logo} />
        <div className='header__info'>
          <div className='header__info--sum'>
            <img className='header__mag' src={mag} />
            <input className="header__search" type="text" placeholder='Search' />
          </div>
          <img className="header__circle" src={circle} />
        </div>
        <div className='header__upPost'>
          <div className='header__upPost--details' >
            <img className='header__upArrow' src={upArrow} />
            <button className='header__upload'>UPLOAD</button>
          </div>
        </div>
      </header>
      {/* main video */}
      <div className='mainVid'>
        <video className='mainVid__media' controls poster={video.image} />
        <h1 className='mainVid__title'>{video.title}</h1>
        <div className="mainVid__info">
          <div className='mainVid__media--details'>
            <div className='mainVid__media--item'>
              <p className='mainVid__media--channel'>By {video.channel}</p>
              <div className='mainVid__media--item1'>
                <img src={eye} />
                <p>{video.views}</p>
              </div>
            </div>
            <div className='mainVid__media--item'>
              <p>{video.timestamp}</p>
              <div className='mainVid__media--item1'>
                <img src={likes} />
                <p>{video.likes}</p>
              </div>
            </div>
          </div>
          <p className='mainVid__description'>{video.description}</p>
          <p className='mainVid__comments'>{video.comments.length} Comments</p>
        </div>
      </div>

      <div className='conversation'>
        <div className='conversation__content'>
          <form className='conversation__form'>
            <img className="conversation__circle" src={circle} />
            <div className="conversation__details">
              <div className="conversation__details--comment">
                <label className="conversation__label" for="comment">JOIN THE CONVERSATION</label>
                <textarea className="conversation__label--comment" name="comment"
                  placeholder="Add a new comment"></textarea>
              </div>
              <div className='conversation__button'>
                <img className='conversation__plus' src={plus} />
                <button className="conversation__btext" type="submit">COMMENT</button>
              </div>
            </div>
          </form>
        </div >
      </div >

      <div className="comments">
        {video.comments.map(displayComm =>

          <div className='comments__box'>
            <div className='comments__sub'>
            <div className='comments__circle'></div>
            <div className='comments__info'>
            <p className='comments__name'>{displayComm.name}</p>
            <p className='comments__date'>{displayComm.timestamp}</p>
            </div>
            <p className='comments__comment'>{displayComm.comment}</p>
          </div>
          </div>
        )
        }
      </div>

      <div className="next">
        <p className='next__title'>NEXT VIDEOS</p>
        {videoSum.map(displaySum =>
          <div className='next__content'>
            <img className='next__img' src={displaySum.image} />
            <div className='next__details'>
            <p className='next__details--name'>{displaySum.title}</p>
            <p>{displaySum.channel}</p>
            </div>
          </div>
        )
        }
      </div>

    </div >
  );
}



export default App;

