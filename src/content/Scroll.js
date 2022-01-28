import '../css/Scroll.css'
import bigImage from '../images/xenophon.png'
import bigImage2 from '../images/xenophon_bak.png'
import useWindowDimensions from '../functions/useWindowDimensions';

function Scroll () { 

  const { width } = useWindowDimensions();

  var imageOne = true;

  function getImage(){
    if (imageOne){
      return(bigImage)
    } else {
      return(bigImage2)
    }
  }

  return (
    <div class='container' >
      <img src={getImage()} alt="bigImage" style={{width: "100%"}}/>
      <div className='text-on-image'>
        <h1 class='text' style={{fontSize: width/9}}>Xenophon</h1>
      </div>
    </div>
  )
} 

export default Scroll