import '../css/General.css'
import '../css/Processor.css'
import left from '../images/left.png'
import right from '../images/right.png'
import u1 from '../images/U1.png'
import u2 from '../images/U2.png'

function Processor (props) {

  const circleWidth = "60%"

  return (
    <div>
      <div className='info-box'>
        <h2 className='thisText' style={{fontSize: props.width/18}} >Features ortholinear key design</h2>
      </div>
      <div className='container' >
        <div className='fixed'>
          <img src={left} alt="left" style={{width: circleWidth}}/>
        </div>
        <div className='flex-item' >
          <img src={right} alt="right" style={{width: circleWidth}}/>
        </div>
      </div>
      <div className='info-box'>
        <h2 className='thisText' style={{fontSize: props.width/18}} >Features Two ATmega32U4</h2>
      </div>
      <div className='container' style={{paddingBottom: "40px"}} >
        <div className='fixed'>
          <img src={u1} alt="leftSide" style={{width: circleWidth}}/>
        </div>
        <div className='flex-item' >
          <img src={u2} alt="rightSide" style={{width: circleWidth}}/>
        </div>
      </div>
    </div>
  )
}

export default Processor