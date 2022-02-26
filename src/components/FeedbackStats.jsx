import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

// pass in the property from App.js as "feedback" in the function parameter
function FeedbackStats() {
  //lets extract feedback from FeedbackContext using useContext()
  const { feedback } = useContext(FeedbackContext)

  //Calculate Ratings Average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating
    }, 0) / feedback.length

  // take off any trailing zeroes; toFixed(1) byitself is enough
  average = average.toFixed(1).replace(/[.,]0$/, '')

  // console.log(average)

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {
//   feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats
