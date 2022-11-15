import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
import { FaRegStar } from 'react-icons/fa'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h5>Your feedback is very important to us.</h5>
        <span className='star'>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </span>
        <hr></hr>
        <br></br>
        <p>We would like to know about your feedback on our installation</p>
        <p>
          The quality of your feedback will help us determine how we can focus
          on improvement and change for the better. You can also provide us any
          insights if there are things you may not like during installation.
        </p>
        <p>Version: 1.0.0</p>
        <Link to='/'>Back to main page</Link>
      </div>
    </Card>
  )
}

export default AboutPage
