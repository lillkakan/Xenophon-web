import '../css/Scroll.css'
import bigImage from '../images/xenophon.png'
import bigImageNo3D from '../images/xenophon_keyless.png'
import bigImageBack from '../images/xenophon_back.png'
import useWindowDimensions from '../functions/useWindowDimensions';
import { useState } from 'react';

function Scroll () { 

  const { width } = useWindowDimensions();
  const [imageSrc, setImageSrc] = useState(bigImage);

  function setImage () {

    if (imageSrc === bigImage){
      setImageSrc(bigImageNo3D)
    } else if (imageSrc === bigImageNo3D) {
      setImageSrc(bigImage)
    } else if (imageSrc === bigImageBack) {
      setImageSrc(bigImage)
    }

  }

  return (
    <div class='container' >
      <img src={imageSrc} onClick={setImage} alt="bigImage" style={{width: "100%"}}/>
      <div className='text-on-top-image'>
        <h1 class='text' style={{fontSize: width/9}}>Xenophon</h1>
      </div>
      <div className='text-on-bottom-image'>
        <h1 class='slogan' style={{fontSize: width/25}}>A ergonomic split Keyboard</h1>
      </div>
    </div>
  )
} 

export default Scroll