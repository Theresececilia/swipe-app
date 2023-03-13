import classes from './Nav.module.css'
import logo from '../assets/logo.png'


const Nav = ({ authToken, minimal, setShowModal, showModal }) => {
  
  const handleClick = () => {
    setShowModal(true)
  }

  return (
    <nav className={classes.nav}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} alt="logo" />
      </div>
      {!authToken && !minimal && 
      <button className={classes.navBtn} onClick={handleClick} disabled={showModal}>Log in</button>}
    </nav>
  )
}

export default Nav