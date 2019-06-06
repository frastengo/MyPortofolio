import React, {Component} from 'react'
import './Main.scss'
import { withRouter, Link } from 'react-router-dom'
var front = '<'
var back = '/>'


class Main extends Component {
  
    render(){
        
        const {pathname} = this.props.location
        var mainPath = '/'
        var aboutPath = '/about'
        var projectsPath = '/projects'
        var educationPath = '/education'
        var experiencePath = '/experience'
        var contactPath = '/contact'
        console.log(pathname)
        return(
            <div className='main-container'>
                <main>
                    <div className='name-title-container'>
                        <h1>Hello & Welcome!</h1>
                        <h2>Get to know me.</h2>
                    </div>
                        {/* <h1>I'm Francisca Astengo</h1>
                        
                        <h2>I am a {front + "FULL STACK WEB DEVELOPER" + back}</h2> */}
                    {/* </div> */}
                    {/* <nav>
                        <Link path to='/about' className={pathname === aboutPath ? 'linkHovered' : 'link'}><span>ABOUT</span></Link>
                        <Link path to='/education' className={pathname === educationPath ? 'linkHovered' : 'link'}><span>EDUCATION</span></Link>
                        <Link path to='/projects' className={pathname === projectsPath ? 'linkHovered' : 'link'}><span>PROJECTS</span></Link>
                        <Link path to='/experience' className={pathname === experiencePath ? 'linkHovered' : 'link'}><span>EXPERIENCE</span></Link>
                        <Link path to='/contact' className={pathname === contactPath ? 'linkHovered' : 'link'}><span>CONTACT</span></Link>  
                    </nav>    */}
                </main>
            </div>
        )
    }
}

export default Main


// const Francisca = {
//     skills: ['React', 'Redux', ]
// }









