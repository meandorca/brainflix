import './Comments.scss'

function Comments({video,timeConvert}){
    return(
        <>
      <div className="comments">
        {video.comments.map(displayComm =>

          <div className='comments__box'>
            <div className='comments__sub'>
              <div className='comments__circle'></div>
              <div className='comments__info'>
                <p className='comments__name'>{displayComm.name}</p>
                <p className='comments__date'> {timeConvert(displayComm.timestamp)}</p>
              </div>
              <p className='comments__comment'>{displayComm.comment}</p>
            </div>
          </div>
        )
        }
      </div>
        </>
    )
}

export default Comments