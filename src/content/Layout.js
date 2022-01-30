import '../css/General.css'
import '../css/Layout.css'
import intLeft from '../images/intLeft.png'
import intRight from '../images/intRight.png'
import sweLeft from '../images/sweLeft.png'
import sweRight from '../images/sweRight.png'

import { useState } from 'react';

function Layout (props) {

  const width = "80%"

  const inter = {left: intLeft,right: intRight, name: "international", color: "#0F0F0F"}
  const swed = {left: sweLeft,right: sweRight, name: "Swedish", color: "#eac435"}

  const [choice, setchoice] = useState(inter);

  function setSwe () {
    setchoice(swed)
  }

  function setInt () {
    setchoice(inter)
  }

  return (
    <div >
      <div  className='info-box'>
        <h2 style={{fontSize: props.width/18, color: inter.color, display: "inline"}} >Features a </h2>
        <h2 className='choice' style={{ fontSize: props.width/18, color: choice.color, display: "inline" }} >{choice.name}</h2>
        <h2 style={{fontSize: props.width/18, color: inter.color, display: "inline"}} > key layout</h2>
        <div >
          <div className='circle' style={{fontSize: props.width/30, display: "inline"}} onClick={setInt} > 🌐 </div>
          <div className='circle' style={{fontSize: props.width/30, display: "inline"}} onClick={setSwe} > 🇸🇪 </div>
        </div>
      </div>
      <div className='container' style={{backgroundColor: "#3F76A6"}} >
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