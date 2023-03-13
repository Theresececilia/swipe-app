import classes from './Home.module.css'
import AuthModal from '../components/AuthModal'
import Nav from '../components/Nav'
import { useState } from 'react'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const authToken = false
  
  const handleClick = () => {
    console.log('clicked')
    setShowModal(true)
  }

  return (
    <>
    <div className={classes.overlay}>
      <Nav minimal={false} authToken={authToken} setShowModal={setShowModal} showModal={showModal}/>
      <div className="home">
        <h1>Swipe North®</h1>
        <button className="primaryBtn" onClick={handleClick}>
          {authToken ? 'Sign in' : 'Create Account'}
        </button>
        
        {showModal && (
          <AuthModal setShowModal={setShowModal}/>
        )}

      </div>
    </div> 
    </>
  )
}

export default Home