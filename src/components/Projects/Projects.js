import React from 'react'
import './Projects.scss'


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
import mobilemain from './furbookimages/mobilemain.png' 
import mobileuser from './furbookimages/mobileuser.png' 
import mobilefind from './furbookimages/mobilefind.png' 

import landing from './memeimages/landing.png'
import creategame from './memeimages/creategame.png'
import joingame from './memeimages/joingame.png'
import lobbycreator from './memeimages/lobbycreator.png'
import lobbyplayer from './memeimages/lobbyplayer.png'
import chosencard from './memeimages/chosencard.png'
import playerview from './memeimages/playerview.png'
import judgeview from './memeimages/judgeview.png'
import mobilelanding from './memeimages/mobilelanding.png'
import mobilelobby from './memeimages/mobilelobby.png'
import mobilecreate from './memeimages/mobilecreate.png'
import winner from './memeimages/winner.png'
import mobilejudgeview from './memeimages/mobilejudgeview.png'

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
                        <div className='main-skills'>
                            <h2>REACT</h2>
                            <h2>JAVASCRIPT</h2>
                            <h2>NODEJS</h2>
                            <h2>HTML</h2>
                            <h2>CSS</h2>
                            <h2>RESPONSIVE</h2>
                        </div>
                        <div className='extra-skills'>
                            <h2>GITHUB</h2>
                            <h2>POSTGRESQL</h2>
                            <h2>HEROKU</h2>
                            <h2>SOCKET.IO</h2>
                            <h2>POSTMAN</h2>
                        </div>
                        <div className='summary'>
                            <h2>Summary: Social application for pet owners.</h2>
                        </div>
                        
                        
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
                            <div className='image-container'>
                                <img src={mobilemain}/>
                                <h3>Mobile - Main</h3>
                            </div>
                            <div className='image-container'>
                                <img src={mobileuser}/>
                                <h3>Mobile - User</h3>
                            </div>
                            <div className='image-container'>
                                <img src={mobilefind}/>
                                <h3>Mobile - Find Friends</h3>
                            </div>

                        </div>
                        <a target='a_blank' href='https://www.myfurbook.com/' ><span>www.myfurbook.com</span></a>
                    </div>
                    <div className='project'>
                        <div className='project-title'>
                            <h1>Meme Master</h1>
                            <p>DevMountain Group Project</p>
                            
                            <p>04/2019</p>
                        </div>
                        <div className='main-skills'>
                            <h2>REACT</h2>
                            <h2>JAVASCRIPT</h2>
                            <h2>NODEJS</h2>
                            <h2>HTML</h2>
                            <h2>CSS</h2>
                            <h2>RESPONSIVE</h2>
                        </div>
                        <div className='extra-skills'>
                            <h2>GITHUB</h2>
                            <h2>POSTGRESQL</h2>
                            <h2>HEROKU</h2>
                            <h2>SOCKET.IO</h2>
                            <h2>POSTMAN</h2>
                        </div>
                        <div className='summary'>
                            <h2>Summary: Social game application that runs through socket.io connection.</h2>
                        </div>
                        
                        <div className='images-container'>
                            <div className='image-container'>
                                <img src={landing}/>
                                <h3>Landing</h3>
                            </div>
                            <div className='image-container'>
                                <img src={creategame}/>
                                <h3>Create Game</h3>
                            </div>
                            <div className='image-container'>
                                <img src={joingame}/>
                                <h3>Join Game</h3>
                            </div>
                            <div className='image-container'>
                                <img src={lobbycreator}/>
                                <h3>Lobby Creator View</h3>
                            </div>
                            <div className='image-container'>
                                <img src={lobbyplayer}/>
                                <h3>Lobby Playerview View</h3>
                            </div>
                            <div className='image-container'>
                                <img src={judgeview}/>
                                <h3>Judgeview</h3>
                            </div>
                            <div className='image-container'>
                                <img src={playerview}/>
                                <h3>Playerview</h3>
                            </div>
                            <div className='image-container'>
                                <img src={chosencard}/>
                                <h3>Playerview after chosing a card</h3>
                            </div>
                            <div className='image-container'>
                                <img src={winner}/>
                                <h3>Winner Page</h3>
                            </div>
                            <div className='image-container'>
                                <img src={mobilelanding}/>
                                <h3>Mobile - Landing</h3>
                            </div>
                            <div className='image-container'>
                                <img src={mobilecreate}/>
                                <h3>Mobile - Create Game</h3>
                            </div>
                            <div className='image-container'>
                                <img src={mobilelobby}/>
                                <h3>Mobile - Lobby</h3>
                            </div>
                            <div className='image-container'>
                                <img src={mobilejudgeview}/>
                                <h3>Mobile - Judgeview</h3>
                            </div>

                        </div>
                        <a target='a_blank' href='https://www.mememaster.fun/' ><span>www.mememaster.fun</span></a>
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