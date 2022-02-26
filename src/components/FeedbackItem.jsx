import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import PropTypes from 'prop-types'

function FeedbackItem({ item, handleDelete }) {
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
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple' />
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
