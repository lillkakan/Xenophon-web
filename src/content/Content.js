import '../css/General.css'
import '../css/Content.css'
import left from '../images/left.png'
import pcb from '../images/pcb.png'
import pcb3d from '../images/3d.png'
import oh from '../images/OH.png'
import qmkode from '../images/QMCode.png'
import qmk from '../images/QMK.png'
import small from '../images/small.png'
import thick from '../images/thick.png'
import ContentBox from './ContentBox'

import { useState } from 'react';

function Content (props) {

  const circleWidth = "60%"
  const textWidth = "70%"

  const [imageSrc, setImageSrc] = useState(pcb);

  function toggleImage () {

    if (imageSrc === pcb){
      setImageSrc(pcb3d)
    } else if (imageSrc === pcb3d) {
      setImageSrc(pcb)
    } 
  }

  function ClickImage () {
    return (
      <div>
        <div className='info-box'>
          <h2 style={{fontSize: props.width/18}} >Features open-source hardware</h2>
          <h3 style={{fontSize: props.width/28, marginTop: -props.width/14}} >The schematic and PCB is available on github</h3>
        </div>
        <div className='container' >
          <div className='fixed'>
            <img src={oh} alt="oh" style={{width: circleWidth}}/>
          </div>
          <div className='flex-item' >
            <img className='cirimg' src={imageSrc} alt="pcb" onClick={toggleImage} style={{width: circleWidth}}/>
          </div>
        </div>
      </div>
    )
  }

  function TextImage () {
    return (
      <div>
        <div className='info-box'>
          <h2 className='thisText' style={{fontSize: props.width/18}} >Features ortholinear key design</h2>
        </div>
        <div className='container' >
          <div className='fixed'>
            <img src={left} alt="oh" style={{width: circleWidth}}/>
          </div>
          <div className='flex-item' >
            <div style={{width: textWidth, lineHeight: props.height/600}} >
              <div style={{paddingBottom: props.width/80}} />
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
    )
  }

  /*
  function BubbleImage () {
    return (
      <div>
        <div className='info-box'>
          <h2 style={{fontSize: props.width/18}} >Features two chassi designs</h2>
          <h3 style={{fontSize: props.width/28, marginTop: -props.width/14}} >One simple, slick design and an inclined more ergonomic one</h3>
        </div>
        <div className='union' >
          <div className='front'>
            <img src={small} alt="oh" style={{width: circleWidth}}/>
          </div>
          <div className='back' >
            <img className='cirimg' src={thick} alt="pcb" onClick={toggleImage} style={{width: circleWidth}}/>
          </div>
        </div>
      </div>
    )
  }
  */

  // <ContentBox name="two ATmega32U4s" desc ="Connected via a TRS jack" left={u1}   right={u2}    width={circleWidth} fontSize={props.width} />s

  return (
    <div>
      <ClickImage />
      <TextImage />
      <ContentBox name="two chassi designs" desc ="One simple, slick design and an inclined more ergonomic one" left={small}   right={thick}   width={circleWidth} fontSize={props.width} />
      <ContentBox name="QMK firmware" left={qmkode}   right={qmk}   width={circleWidth} fontSize={props.width} />
      
      <div style={{minHeight: props.width/30}}/>
    </div>
  )
}

export default Content