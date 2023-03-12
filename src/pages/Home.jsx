import styles from './Home.module.css' 
import Nav from '../components/Nav'

const Home = () => {
  const authToken = false
  
  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
      <Nav/>
      <div className="home">
        <h1>Swipe North®</h1>
        <button className="primaryBtn" onClick={handleClick}>
          {authToken ? 'Sign in' : 'Create Account'}
        </button>
      </div>
    </>
  )
}

export default Home