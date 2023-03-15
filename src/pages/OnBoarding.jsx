import { useState } from "react"
import Nav from '../components/Nav'
import classes from './OnBoarding.module.css'

const OnBoarding = () => {
    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: false,
        gender_identity: "man",
        job_interest: "",
        url: "",
        about: "",
        myfile: "",
        matches: []

    })
    const handleSubmit = () => {
        console.log('submitted')
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        const name = e.target.name
        console.log('value' + value, 'name' + name)
        setFormData((prevState) => ({
            ...prevState,
            [name] : value
        }))
    }

    console.log(formData)

    return (
        <>
        <Nav 
        minimal={true}
        setShowModal={() => {}}
        showModal={false}
        />
        <div className={classes.onboarding}>
            <h2>CREATE ACCOUNT</h2>
            <form onSubmit={handleSubmit} className={classes.form}>
                <section>
                    <label htmlFor='first_name'>First Name</label>
                    <input 
                    id='first_name' 
                    type='text' 
                    name='first_name' 
                    placeholder='First Name' 
                    required={true} 
                    value={formData.first_name} 
                    onChange={handleChange} 
                    />

                    <label>Birthday</label>
                    <div className={classes.multipleInput}>
                    <input 
                    id='dob_day' 
                    type='number' 
                    name='dob_day' 
                    placeholder='DD' 
                    required={true} 
                    value={formData.dob_day} 
                    onChange={handleChange} 
                    />
                     <input 
                    id='dob_month' 
                    type='number' 
                    name='dob_month' 
                    placeholder='MM' 
                    required={true} 
                    value={formData.dob_month} 
                    onChange={handleChange} 
                    />
                     <input 
                    id='dob_year' 
                    type='number' 
                    name='dob_year' 
                    placeholder='YYYY' 
                    required={true} 
                    value={formData.dob_year} 
                    onChange={handleChange} 
                    />
                    </div>

                    <label>Gender</label>
                    <div className={classes.multipleInput}>
                    <input 
                    id='man-gender-identity' 
                    type='radio' 
                    name='gender_identity'
                    value='man' 
                    onChange={handleChange}
                    checked={formData.gender_identity === 'man'}
                    />
                    <label htmlFor='man-gender-identity'>Man</label>

                    <input 
                    id='woman-gender-identity' 
                    type='radio' 
                    name='gender_identity'
                    value='woman' 
                    onChange={handleChange}
                    checked={formData.gender_identity === 'woman'}
                    />
                    <label htmlFor='woman-gender-identity'>Woman</label>

                    <input 
                    id='more-gender-identity' 
                    type='radio' 
                    name='gender_identity'
                    value='more' 
                    onChange={handleChange}
                    checked={formData.gender_identity === 'more'}
                    />
                    <label htmlFor='more-gender-identity'>More</label>
                    </div>
                     
                    <div>
                    <label htmlFor='show-gender'>Show gender on my profile</label>
                    <input 
                    id='show-gender' 
                    type='checkbox' 
                    name='show_gender'
                    onChange={handleChange}
                    checked={formData.show_gender}
                    />
                   </div>
                   
                   <label htmlFor='job_interest'>I'm looking for:</label>
                   <input
                   id='job_interest'
                   type='text'
                   name='job_interest'
                   placeholder="Teacher jobs..."
                   value={formData.job_interest}
                   onChange={handleChange}
                   />

                   <label htmlFor='about'>About me</label>
                   <input
                   id='about'
                   type='text'
                   name='about'
                   required={true}
                   placeholder="Tell us about you"
                   value={formData.about}
                   onChange={handleChange}
                   />
                   
                </section>
                <section>
                    <label htmlFor='about'>Profile Picture</label>
                    <input 
                    type='url'
                    name='url'
                    id='url'
                    onChange={handleChange}
                    required={true}
                    />
                    <div className={classes.photoContainer}>
                      <img src={formData.url} alt="profile picture"/>
                    </div>

                    <label htmlFor="myfile">Upload resumé:</label>
                    <input 
                    type="file" 
                    id="myfile" 
                    name="myfile" />
                    <input type='submit'/>
                </section>
            </form>
        </div>
        </>
    )
}

export default OnBoarding