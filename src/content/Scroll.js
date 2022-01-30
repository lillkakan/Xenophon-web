import '../css/Scroll.css'
import bigImage from '../images/xenophon.png'
import bigImageNo3D from '../images/xenophon_keyless.png'
import { useState } from 'react';

function Scroll (props) { 

  const [imageSrc, setImageSrc] = useState(bigImage);

  function setImage () {

    if (imageSrc === bigImage){
      setImageSrc(bigImageNo3D)
    } else if (imageSrc === bigImageNo3D) {
      setImageSrc(bigImage)
    } 
  }

  return (
    <div className='container' >
      <img src={imageSrc} onClick={setImage} alt="bigImage" style={{width: "100%"}}/>
      <div className='text-on-top-image'>
        <h1 className='text' style={{fontSize: props.width/8}}>Xenophon</h1>
      </div>
      <div className='text-on-bottom-image'>
        <h1 className='slogan' style={{fontSize: props.width/25}}>A ergonomic split Keyboard</h1>
      </div>
    </div>
  )
} 

export default Scroll