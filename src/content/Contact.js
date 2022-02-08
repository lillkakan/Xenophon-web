import twitter from '../images/twitter.svg'
import github from '../images/GitHub-Mark-Light-64px.png'
import '../css/Contact.css'

function Contact (props) {
  const size = props.size ? props.size : '20px'

  return (
    <div className='contact'>
      <a href="https://twitter.com/lillkakan">
        <img width={size} height={size} src={twitter} alt="twitter" />
      </a>
      <a href="https://github.com/lillkakan/Xenophon">
        <img width={size} height={size} src={github} alt="github" />
      </a>
    </div>
  )
}

export default Contact