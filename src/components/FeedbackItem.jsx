import { FaTimes, FaPen } from 'react-icons/fa'
import { useContext } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
  // const [rating, setRating] = useState(7)
  // const [text, setText] = useState('This is an example of a feedback')

  // const review = true

  // const handleClick = () => {
  //   review ? setRating(10) : setRating(0)
  // }

  // const handleClick = (id) => {
  //   console.log(id)
  // }

  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>

      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='#48cae4' />
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaPen color='#00b4d8' />
      </button>
      <div className='text-display'>{item.text}</div>
      {/* <button className='btn btn-secondary' onClick={handleClick}>
        Click
      </button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
