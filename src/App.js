import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
// import Post from './components/Post'
// import Card from './components/shared/Card'

const App = () => {
  // const [feedback, setFeedback] = useState(FeedbackData)

  // const addFeedback = (newFeedback) => {
  //   newFeedback.id = parseFloat(uuidv4(), 10)
  //   setFeedback([newFeedback, ...feedback])
  // }

  // const deleteFeedback = (id) => {
  //   if (window.confirm('Are you sure you want to delete?')) {
  //     setFeedback(feedback.filter((item) => item.id !== id))
  //   }
  // }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route exact path='/about' element={<AboutPage />} />
            {/* <Route exact path='/post/*' element={<Post />} /> */}
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
