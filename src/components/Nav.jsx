import classes from './Nav.module.css'
import logo from '../assets/logo.png'
import burger from '../assets/burger.png'


const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {
  
  const handleClick = () => {
    setShowModal(true)
    setIsSignUp(false)
  }
  const authToken = false
  return (
    <nav className={classes.nav}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      <div className={classes.innerNav}>
        {!authToken && !minimal && 
        <button className={classes.navBtn} onClick={handleClick} disabled={showModal}>Log in</button>}
        <img className={classes.burger} src={burger} alt="menu"/>
      </div>
    </nav>
  )
}

export default Nav