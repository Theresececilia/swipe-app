import classes from './AuthModal.module.css'

const AuthModal = ({setShowModal}) => {

    const handleClick = () => {
        setShowModal(false)
    }
    return (
        <div className={classes.authModal}>
            <div onClick={handleClick} className={classes.close}>X</div>
            AUTH MODAL
        </div>
    )
}

export default AuthModal