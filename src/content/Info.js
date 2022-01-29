import '../css/General.css'
import '../css/Info.css'
import leftSide from '../images/leftKeys.png'
import rightSide from '../images/rightKeys.png'

function Info (props) {

  return (
    <div>
      <div className='info-box'>
        <h2 className='thisText' style={{fontSize: props.width/14}} >Features a Swedish key layout</h2>
      </div>
      <div className='container' >
        <div className='fixed'>
          <img src={leftSide} alt="leftSide" style={{width: "85%"}}/>
        </div>
        <div className='flex-item' >
          <img src={rightSide} alt="rightSide" style={{width: "85%"}}/>
        </div>
      </div>
    </div>
  )
}

export default Info