import './Conversation.scss'
import circle from '../../assets/Images/Mohan-muruge.jpg'
import plus from '../../assets/Icons/add_comment.svg'

function Conversation() {
  return (
    
      <div className='conversation'>
        <div className='conversation__content'>
          <form className='conversation__form'>
            <img className="conversation__circle" src={circle} />
            <div className="conversation__details">
              <label className="conversation__label" for="comment">JOIN THE CONVERSATION</label>
              <div className="conversation__details--comment">
                <textarea className="conversation__label--comment" name="comment"
                  placeholder="Add a new comment"></textarea>
                <div className='conversation__button'>
                  <img className='conversation__plus' src={plus} />
                  <button className="conversation__btext" type="submit">COMMENT</button>
                </div>
              </div>
            </div>
          </form>
        </div >
      </div >
  
  )
}

export default Conversation