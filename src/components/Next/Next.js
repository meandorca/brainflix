import './Next.scss'
import videoSum from '../../Data/videos.json'

function Next({ video, setVideo, videoDetails }) {

  const changesetVideo = (id) => {
    let newVid = videoDetails.find(video => video.id === id)
    console.log(newVid)
    setVideo(newVid)
  }

  const filterNext = videoSum.filter(videoNext => videoNext.id != video.id)

  return (
    <>
      <div className="next">
        <p className='next__title'>NEXT VIDEOS</p>
        {filterNext.map(displaySum =>
          <div onClick={() => changesetVideo(displaySum.id)} className='next__content'>
            <img className='next__img' src={displaySum.image} />
            <div className='next__details'>
              <p className='next__details--name'>{displaySum.title}</p>
              <p>{displaySum.channel}</p>
            </div>
          </div>
        )
        }
      </div>
    </>
  )
}

export default Next 