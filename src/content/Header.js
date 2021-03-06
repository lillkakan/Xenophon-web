import '../css/Header.css'
import '../css/General.css'
import logo from '../images/KeyCube.png'
import Contact from './Contact'

function Header (props) {

  function headerSetting() {
    if (props.width > 500){
      return (
        <header className='header'>
          <div className='header-left' >
            <a href="https://github.com/lillkakan">
              <img src={logo} alt="logo" style={{width: '50px'}} />
            </a>
          </div>
          <div className='header-right' >
            <Contact size='45px' />
          </div>
        </header>
      )
    } else {
      return (
        <header className='header'>
          <div style={{height: "20px"}}></div>
        </header>
      )
    }
  }

  return headerSetting()
}

export function Foot () {

  return (
    <div className='foot' >
      <a className='foot-text' href="https://github.com/lillkakan">@lillkakan 2022</a>
    </div>
  )
}

export default Header