import React from 'react'
import './Projects.scss'
import fur1 from './fur1.png'
import fur2 from './fur2.png'
import fur3 from './fur3.png'
import meme1 from './meme1.png'
import meme2 from './meme2.png'
import meme3 from './meme3.png'
import meme4 from './meme4.png'

function Projects () {
    return (
        <div className='projects-container'>
            <div className='projects'>
                <div className='title'>
                    <h1>console.log(FRANCISCA.projects)</h1>
                </div>
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
                                <img src={fur1}/>
                            </div>
                            <div className='image-container'>
                                <img src={fur2}/>
                            </div>
                            <div className='image-container'>
                                <img src={fur3}/>
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