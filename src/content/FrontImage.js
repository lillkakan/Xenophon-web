import '../css/FrontImage.css'
import bigImage from '../images/xenophon.png'
import bigImageNo3D from '../images/xenophon_keyless.png'
import { useState } from 'react';

function FrontImage (props) { 

  const nameText = {name: "Xenophon", div: 8}
  const descText = {name: "Athenian military leader, philosopher, and historian.", div: 30}

  const [imageSrc, setImageSrc] = useState(bigImage);
  const [text, setText] = useState(nameText);

  function setImage () {

    if (imageSrc === bigImage){
      setImageSrc(bigImageNo3D)
    } else if (imageSrc === bigImageNo3D) {
      setImageSrc(bigImage)
    } 
  }

  function toggleText () {

    if (text.name === nameText.name){
      setText(descText)
    } else if (text.name === descText.name) {
      setText(nameText)
    } 
  }

  return (
    <div className='container' >
      <img src={imageSrc} onClick={setImage} alt="bigImage" style={{width: "100%"}}/>
      <div className='text-on-top-image' onClick={toggleText}>
        <h1 className='text' style={{fontSize: props.width/text.div}} >{text.name}</h1>
      </div>
      <div className='text-on-bottom-image'>
        <h1 className='slogan' style={{fontSize: props.width/25}}>An ortholinear split Keyboard</h1>
      </div>
    </div>
  )
} 

export default FrontImage