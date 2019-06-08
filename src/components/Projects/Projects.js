import React from 'react'
import './Projects.scss'
import fur1 from './fur1.png'
import fur2 from './fur2.png'
import fur3 from './fur3.png'
import meme1 from './meme1.png'
import meme2 from './meme2.png'
import meme3 from './meme3.png'
import meme4 from './meme4.png'

import register from './furbookimages/register.png' 
import welcomeRegister from './furbookimages/welcomeafteregister.png' 
import login from './furbookimages/login.png' 
import main from './furbookimages/main.png' 
import add from './furbookimages/addprofile.png' 
import find from './furbookimages/findfriends.png' 
import profile from './furbookimages/myprofiles.png' 
import select from './furbookimages/select1.png' 
import frienddisplay from './furbookimages/frienddisplay.png' 
import update from './furbookimages/update.png' 
import userinfo from './furbookimages/userinfo.png' 
import welcomeLogin from './furbookimages/welcome.png' 

function Projects () {
    return (
        <div className='projects-container'>
            <div className='projects'>
                {/* <div className='title'>
                    <h1>console.log(FRANCISCA.projects)</h1>
                    <i class="material-icons">
                    web
                    </i>
                </div> */}
                {/* <nav>
                    <span>FurBook</span>
                    <span>Meme Master</span>
                    <span>Portofolio</span>
                </nav> */}
                <div className='project-container'>
                    <div className='project'>
                        <div className='project-title'>
                            <h1>FurBook</h1>
                            <p>DevMountain Personal Project</p>
                            
                            <p>04/2019</p>
                        </div>
                        <h2>Skills: ['React', 'Redux', 'HTML', 'CSS', 'Node.js', 'JavaScript', 'PostgreSQL', 'Socket.io', 'Cloudinary']</h2>
                        <h2>Summary: Social application for pet owners.</h2>
                        
                        
                        <div className='images-container'>
                            <div className='image-container'>
                                <img src={main}/>
                                <h3>Main</h3>
                            </div>
                            <div className='image-container'>
                                <img src={register}/>
                                <h3>Registration</h3>
                            </div>
                            <div className='image-container'>
                                <img src={welcomeRegister}/>
                                <h3>After Registration</h3>
                            </div>
                            <div className='image-container'>
                                <img src={login}/>
                                <h3>Login</h3>
                            </div>
                            <div className='image-container'>
                                <img src={welcomeLogin}/>
                                <h3>After Login</h3>
                            </div>
                            <div className='image-container'>
                                <img src={add}/>
                                <h3>Add Profile</h3>
                            </div>
                            <div className='image-container'>
                                <img src={select}/>
                                <h3>React Select</h3>
                            </div>
                            <div className='image-container'>
                                <img src={profile}/>
                                <h3>My Profile(s)</h3>
                            </div>
                            <div className='image-container'>
                                <img src={userinfo}/>
                                <h3>User Information</h3>
                            </div>
                            <div className='image-container'>
                                <img src={update}/>
                                <h3>Update Profile</h3>
                            </div>
                            <div className='image-container'>
                                <img src={find}/>
                                <h3>Find Friends</h3>
                            </div>
                            <div className='image-container'>
                                <img src={frienddisplay}/>
                                <h3>Profile Display</h3>
                            </div>

                        </div>
                        <span>www.myfurbook.com</span>
                    </div>
                    <div className='project'>
                        <div className='project-title'>
                            <h1>Meme Master</h1>
                            <p>DevMountain Group Project</p>
                            
                            <p>04/2019</p>
                        </div>
                        <h2>Skills: ['React', 'Redux', 'HTML', 'CSS', 'Node.js', 'JavaScript', 'PostgreSQL', 'Socket.io', 'Cloudinary']</h2>
                        <h2>Summary: Social game application.</h2>
                        {/* <h2>Features: Sockets.</h2> */}
                        
                        <div className='images-container'>
                            <div className='image-container'>
                                <img src={meme1}/>
                            </div>
                            <div className='image-container'>
                                <img src={meme2}/>
                            </div>
                            <div className='image-container'>
                                <img src={meme3}/>
                            </div>
                            <div className='image-container'>
                                <img src={meme4}/>
                            </div>

                        </div>
                        <span>www.mememaster.fun</span>
                    </div>
                    <div className='project'>
                        <h1>Meme Master</h1>
                        <h2>DevMountain</h2>
                        <p>Skills: ['React']</p>
                    </div>
                    <div className='project'>
                        <h1>Portofolio</h1>
                        <h2>DevMountain</h2>
                        <p>Skills: ['React']</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;