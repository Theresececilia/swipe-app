import classes from './Home.module.css'
import AuthModal from '../components/AuthModal'
import Nav from '../components/Nav'
import { useState } from 'react'

const Home = () => {
  const [showModal, setShowModal] = useState(false)
  const [isSignUp, setIsSignUp] = useState(true)

  const authToken = false
  
  const handleClick = () => {
    console.log('clicked')
    setShowModal(true)
    setIsSignUp(true)
  }

  return (
    <>
    <div className={classes.overlay}>
      <Nav 
      minimal={false}
      setShowModal={setShowModal}
      showModal={showModal}
      setIsSignUp={setIsSignUp}/>
      <div className={classes.home}>
        <h1 className={classes.primaryTitle}>Swipe North®</h1>
        <div className={classes.btnContainer}>
          <button className="primaryBtn" onClick={handleClick}>
            {authToken ? 'Sign in' : 'Create Account'}
          </button>
          {showModal && (
            <AuthModal setShowModal={setShowModal} setIsSignUp={setIsSignUp} isSignUp={isSignUp}/>
          )}
          <button className="primaryBtn">Start swiping</button>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Home