import { createContext, useState } from 'react'

// create context
const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  // the value that will be given to the context
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'this is the first text of the feedback',
      rating: 10,
    },
  ])

  // the Provider gives access to the context of its children
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
