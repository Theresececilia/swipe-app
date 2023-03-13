import classes from './AuthModal.module.css'
import { useState } from 'react'

const AuthModal = ({setShowModal, setIsSignUp, isSignUp}) => {
const [email, setEmail] = useState(null)
const [password, setPassword] = useState(null)
const [confirmPassword, setConfirmPassword] = useState(null)
const [error, setError] = useState(null)

console.log(email, password, confirmPassword)

    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if( isSignUp && (password !== confirmPassword)) {
                setError('Passwords need to match!')
            }
            console.log('make a post request to our database')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={classes.authModal}>
            <div onClick={handleClick} className={classes.close}>⊗</div>
            <h2>{isSignUp ? 'CREATE ACCOUNT' : 'LOG IN'}</h2>
            <p className={classes.modalInfo}>By clicking Log in, you agree to our terms. Learn how we process your data
                 in our Privacy Policy and Cookie Policy.</p>
            <form onSubmit={handleSubmit}>
                <input 
                type='email' 
                id='email' 
                name='email' 
                placeholder='email'
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type='password' 
                id='password' 
                name='password' 
                placeholder='password'
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input 
                type='password' 
                id='password-check' 
                name='password-check' 
                placeholder='confirm Password'
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className={classes.secondaryBtn} type="submit" />
                <p>{error}</p>
            </form>
            <hr/>
            <h4>The road to new opportunities begins here.</h4>
            
        </div>
    )
}

export default AuthModal