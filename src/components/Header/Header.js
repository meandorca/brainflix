import './Header.scss'
import logo from '../../assets/Logo/BrainFlix-logo.svg'
import mag from '../../assets/Icons/search.svg'
import upArrow from '../../assets/Icons/upload.svg'
import circle from '../../assets/Images/Mohan-muruge.jpg'
import {NavLink} from 'react-router-dom'


function Header() {

  return (
    
      <header className="header">
    <NavLink to="/" ><img className="header__img" src={logo} /></NavLink>
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
            <NavLink to="/upload"><button className='header__upload'>UPLOAD</button></NavLink>
          </div>
        </div>
        <img className="header__circle--addon" src={circle} />
      </header>

  )
}

export default Header