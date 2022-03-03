import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext)

  useEffect(() => {
    setBtnDisabled(false)
    setText(feedbackEdit.item.text)
    setRating(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleTextChange = ({ target: { value } }) => {
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (value.trim().length < 10) {
      setBtnDisabled(true)
      setMessage(
        <div>
          <p>a few phrases will do the trick</p>
          <p>kind words are appreciate</p>
          <p>we worked hard on your project</p>
        </div>
      )
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)
      }

      setText('')
    }
  }

  return (
    <div>
      <Card>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
          <div className='input-group'>
            <input
              type='text'
              placeholder='Write us a review'
              onChange={handleTextChange}
              value={text}
            />
            <Button isDisabled={btnDisabled} type='submit'>
              Send
            </Button>
          </div>

          {message ? <div className='message'>{message}</div> : null}
        </form>
      </Card>
    </div>
  )
}

export default FeedbackForm
