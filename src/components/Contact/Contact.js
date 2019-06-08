import React from 'react'
import './Contact.scss'
import {Link} from 'react-router-dom'
import github from './github2.png'
import linkedin from './linkedin.png'



function Contact () {
    return (
        <div className='contact-container'>
            <div className='contact'>
                {/* <div className='title'>
                    <h1>console.log(FRANCISCA.contact)</h1>
                </div> */}
                
                <div className='find-me-online'>
                <div className='email'>
                    <i class="material-icons">
                   email
                    </i>
                    <h1>frastengoravilet@gmail.com</h1>

                </div>
                <div className='email'>
                    <i class="material-icons">
                    person_pin_circle
                    </i>
                    <h1>North Phoenix, Arizona</h1>

                </div>
                    {/* <h1>Find Me Online</h1> */}
                <div className='links'>
                    <div className='link'>
                        <h1>Github</h1>
                        <h2>Username: frastengo</h2>
                        <div className='img-container'><img src={github}/></div>
                        <a href='www.linkedin.com/in/francisca-astengo'><h2>Visit</h2></a>

                    </div>
                    <div className='link'>
                        <h1>LinkedIn</h1>
                        <h2>Username: frastengo</h2>
                        
                        <div className='img-container'><img src={linkedin}/></div>
                        
                        <a href='www.linkedin.com/in/francisca-astengo'><h2>Visit</h2></a>

                    </div>
                </div>
                
                </div>
                {/* <div>
                    <h1>Message Me</h1>
                    <form>
                        <label>Name</label>
                        <input></input>
                        <label>Subject</label>
                        <label>Message</label>
                    </form>
                </div> */}
            </div>   
        </div>
    )
}

export default Contact;