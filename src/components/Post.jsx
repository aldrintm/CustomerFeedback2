import { Navigate, useNavigate, Routes, Route } from 'react-router-dom'
import Card from './shared/Card'

function Post() {
  const status = 200

  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello')
    navigate('/about')
  }

  if (status === 404) {
    return (
      <>
        <Navigate to='/notfound' />
        <button className='btn btn-secondary' onClick={onClick}>
          Click
        </button>
      </>
    )
  }
  return (
    <div>
      <Card>
        <h1>Post</h1>
        <button className='btn btn-secondary' onClick={onClick}>
          Click
        </button>

        <Routes>
          <Route path='/show' element={<h1>Well this is a surprise!!!</h1>} />
        </Routes>
      </Card>
    </div>
  )
}

export default Post
