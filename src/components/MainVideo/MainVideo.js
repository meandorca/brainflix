import './MainVideo.scss'
import eye from '../../assets/Icons/views.svg'
import likes from '../../assets/Icons/likes.svg'

function MainVideo({ video, timeConvert }) {
  console.log(video)
  return (
    video?
    <>
      <div className='mainVid'>
        <div className='mainVid__backg'>
          <video className='mainVid__media' controls poster={video.image} />
        </div>
        <div className='mainVid__words'>
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
                <p>{timeConvert(video.timestamp)}</p>
                <div className='mainVid__media--item1'>
                  <img src={likes} />
                  <p>{video.likes}</p>
                </div>
              </div>
            </div>
            <p className='mainVid__description'>{video.description}</p>
            <p className='mainVid__comments'>{video.comments?.length} Comments</p>
          </div>
        </div>
      </div>
    </>
    :'LOADING'
  )
}

export default MainVideo