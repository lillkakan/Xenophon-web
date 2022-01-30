import '../css/General.css'
import left from '../images/left.png'
import right from '../images/right.png'
import u1 from '../images/U1.png'
import u2 from '../images/U2.png'
import kic from '../images/KIC.png'
import oh from '../images/OH.png'
import ContentBox from './ContentBox'

function Content (props) {

  const circleWidth = "60%"

  return (
    <div>
      <ContentBox name="open-source hardware"   left={oh}   right={kic}   width={circleWidth} fontSize={props.width} />
      <ContentBox name="ortholinear key design" left={left} right={right} width={circleWidth} fontSize={props.width} />
      <ContentBox name="two ATmega32U4s"         left={u1}   right={u2}    width={circleWidth} fontSize={props.width} />
      <div style={{minHeight: props.width/22}}/>
    </div>
  )
}

export default Content