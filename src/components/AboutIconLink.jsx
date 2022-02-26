import { FaRegQuestionCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
//use import Link to ensure that the page doesnt do a refresh/reload

import {} from 'react-icons/fa'

function AboutIconLink() {
  return (
    <div className='about-link'>
      <Link to='/about'>
        <FaRegQuestionCircle size={50} />
      </Link>
    </div>
  )
}

export default AboutIconLink
