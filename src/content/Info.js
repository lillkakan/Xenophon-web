import '../css/General.css'
import leftSide from '../images/leftKeys.png'

function Info () {

  return (
    <div className='container' >
      <div className='fixed' >
        <img src={leftSide} alt="bigImage" style={{width: "82%"}}/>
      </div>
      <div className='flex-item' >
        <h1 class='info-text' >Features an</h1>
        <h1 class='info-text' >Ortholinear design</h1>
        <h2 class='info-text' >Ergonomic!</h2>
      </div>
    </div>
  )
}

export default Info