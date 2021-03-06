import '../css/General.css'
import '../css/Layout.css'
import intLeft from '../images/intLeft.png'
import intRight from '../images/intRight.png'
import sweLeft from '../images/sweLeft.png'
import sweRight from '../images/sweRight.png'
import sweIcon from '../images/sweden-svgrepo-com.svg'
import intIcon from '../images/drawing.svg'


import { useState } from 'react';

function Layout (props) {

  const width = "80%"

  const inter = {left: intLeft,right: intRight, name: "international", color: "#F7F4F3"}
  const swed = {left: sweLeft,right: sweRight, name: "Swedish", color: "#eac435"}

  const [choice, setchoice] = useState(inter);

  function setSwe () {
    setchoice(swed)
  }

  function isSwe () {
    return choice.name === swed.name
  }

  function setInt () {
    setchoice(inter)
  }

  function isInt () {
    return choice.name === inter.name
  }

  return (
    <div >
      <div  className='layout-box'>
        <h2 style={{fontSize: props.width/18, color: inter.color, display: "inline"}} >Features a </h2>
        <h2 className='choice' style={{ fontSize: props.width/18, color: choice.color, display: "inline" }} > {choice.name} </h2>
        <h2 style={{fontSize: props.width/18, color: inter.color, display: "inline"}} > key layout</h2>
        <div >
          <img className='circle' style={{display: "inline", filter: isSwe() ? "brightness(100%)" : "", padding: "2px"}} width={props.width/36} onClick={setSwe} src={sweIcon} alt="sweIcon" />
          <img className='circle' style={{display: "inline", filter: isInt() ? "brightness(100%)" : "", padding: "2px"}} width={props.width/32} onClick={setInt} src={intIcon} alt="intIcon" />
        </div>
      </div>
      <div className='container' style={{backgroundColor: "#3F76A6", paddingBottom: props.width/60}} >
        <div className='fixed'>
          <img src={choice.left} alt="leftSide" style={{width: width}}/>
        </div>
        <div className='flex-item' >
          <img src={choice.right} alt="rightSide" style={{width: width}}/>
        </div>
      </div>
    </div>
  )
}

export default Layout