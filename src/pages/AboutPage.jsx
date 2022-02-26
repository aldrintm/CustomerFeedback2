import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a react app which is an about page of this application</p>
        <p>Version: 1.0.0</p>
        <Link to='/'>Back to main page</Link>
      </div>
    </Card>
  )
}

export default AboutPage
