import '../css/General.css'
import '../css/Info.css'
import leftSide from '../images/leftKeys.png'
import rightSide from '../images/rightKeys.png'

function Info (props) {

  return (
    <div>
      <div className='info-box'>
        
        <h2 style={{fontSize: "30px"}} >Features a Swedish key layout</h2>
      </div>
      <div className='container' style={{paddingTop: "20px"}} >
        <div className='fixed'>
          <img src={leftSide} alt="asdf" style={{width: "85%"}}/>
        </div>
        <div className='flex-item' >
          <img src={rightSide} alt="adfasdf" style={{width: "85%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Info