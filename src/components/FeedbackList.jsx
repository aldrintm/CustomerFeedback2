import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList({ handleDelete }) {
  // Extract whatever we want from our FeedbackContext by using useContext hook
  const { feedback } = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              // key={item.id}
              item={item}
              // handleDelete={(id) => console.log(id)}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
export default FeedbackList

// return (
//   <div className='feedback-list'>
//     {feedback.map((item) => (
//       <FeedbackItem
//         key={item.id}
//         item={item}
//         // handleDelete={(id) => console.log(id)}
//         handleDelete={handleDelete}
//       />
//     ))}
//   </div>
// )

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }
