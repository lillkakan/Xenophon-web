import '../css/Header.css'
import '../css/General.css'
import logo from '../images/KeyCube.png'
import Contact from './Contact'

function Header (props) {

  function headerSetting(s) {
    if (s === 'center') {
      return (
        <header className='header'>
          <img src={logo} alt="Frostward" style={{width: '50px'}} />
        </header>
      )
    } else if (s === 'full') {
      return (
        <header className='header'>
          <div className='header-left' >
            <a href="https://github.com/lillkakan">
              <img src={logo} alt="logo" style={{width: '50px'}} />
            </a>
          </div>
          <div className='header-right' >
            <Contact size='40px' />
          </div>
        </header>
      )
    }
  }

  return headerSetting('full')
}

export function Foot (props) {

  function headerSetting(s) {
    return (
      <div className='foot' >
        <a className='foot-text' href="https://www.linkedin.com/in/jesper-fasth-8a8629207/">Website by Jesper Fasth</a>
      </div>
    )
  }

  return headerSetting('full')
}

export default Header