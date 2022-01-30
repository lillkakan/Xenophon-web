import '../css/General.css'
import left from '../images/left.png'
import u1 from '../images/U1.png'
import u2 from '../images/U2.png'
import kic from '../images/KIC.png'
import oh from '../images/OH.png'
import qmkode from '../images/QMCode.png'
import qmk from '../images/QMK.png'
import ContentBox from './ContentBox'

function Content (props) {

  const circleWidth = "60%"
  const textWidth = "80%"

  return (
    <div>
      <ContentBox name="open-source hardware"   left={oh}   right={kic}   width={circleWidth} fontSize={props.width} />
      <div>
      <div className='info-box'>
        <h2 className='thisText' style={{fontSize: props.width/18}} >Features ortholinear key design</h2>
      </div>
      <div className='container' >
        <div className='fixed'>
          <img src={left} alt="oh" style={{width: circleWidth}}/>
        </div>
        <div className='flex-item' >
          <div style={{width: textWidth}} >
            <div style={{paddingBottom: props.width/25}} />
            <h2 style={{display: "inline", fontSize: props.width/30}}> If ergonomics are your goal, switching to an </h2>
            <a style={{display: "inline", fontSize: props.width/30, color: "#BE4C4C"}} href="https://content.iospress.com/articles/work/wor01109">ergonomic split keyboard</a>
            <h2 style={{display: "inline", fontSize: props.width/30}}> is proven to improve ergonomics and reduce pain.</h2>
            <div>
              <h2 style={{display: "inline", fontSize: props.width/30}}>- Jake Harrington</h2>
              <a style={{display: "inline", fontSize: props.width/80, textDecoration: "none"}} href="https://switchandclick.com/best-ortholinear-keyboards/">[1]</a>
            </div>
          </div>
        </div>
      </div>
    </div>
      <ContentBox name="QMK firmware"   left={qmkode}   right={qmk}   width={circleWidth} fontSize={props.width} />
      <ContentBox name="two ATmega32U4s"         left={u1}   right={u2}    width={circleWidth} fontSize={props.width} />
      <div style={{minHeight: props.width/22}}/>
    </div>
  )
}

export default Content