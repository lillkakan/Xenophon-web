import '../css/General.css'
import '../css/Info.css'
import intLeft from '../images/intLeft.png'
import intRight from '../images/intRight.png'
import sweLeft from '../images/sweLeft.png'
import sweRight from '../images/sweRight.png'

import { useState } from 'react';

function Info (props) {

  const width = "70%"

  const inter = {left: intLeft,right: intRight, name: "international", color: "#0F0F0F"}
  const swed = {left: sweLeft,right: sweRight, name: "Swedish", color: "#eac435"}

  const [choice, setchoice] = useState(inter);

  function toggleChoice () {
    if (choice.name === "international"){
      setchoice(swed)
    } else if (choice.name === "Swedish"){
      setchoice(inter)
    }
  }

  return (
    <div >
      <div  className='info-box' >
        <h2 style={{fontSize: props.width/18, color: inter.color, display: "inline"}} >Features a </h2>
        <h2 className='choice' style={
          {
            fontSize: props.width/18, 
            color: choice.color, 
            borderColor: choice.color === swed.color ? inter.color : swed.color,
            display: "inline", 
          }
        } onClick={toggleChoice}>{choice.name}</h2>
        <h2 style={{fontSize: props.width/18, color: inter.color, display: "inline"}} > key layout</h2>
        
      </div>
      <div className='container' style={{paddingTop: "40px"}} >
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

export default Info