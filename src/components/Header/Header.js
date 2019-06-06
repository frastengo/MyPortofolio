import React, { Component } from 'react'
import './Header.scss'
import { withRouter, Link } from 'react-router-dom'
var front = '<'
var back = '/>'

class Header extends Component {
    constructor(){
        super()

        this.state = {
            showNav: false
        }


    }
    home = () => {
        this.props.history.push('/')
    }
    
    render () {
        const {showNav} = this.state
        const {pathname} = this.props.location
        var mainPath = '/'
        var aboutPath = '/about'
        var projectsPath = '/projects'
        var educationPath = '/education'
        var experiencePath = '/experience'
        var contactPath = '/contact'
        console.log(pathname)
        return (
            <div className='header-container'>
                {/* {pathname === mainPath ? (
                    null
                ):( */}

                
                <header>
                    <div onClick={this.home} className='name-title-container'>
                        <h1>FRANCISCA ASTENGO RAVILET</h1>
                        <h2>{front + "FULL STACK WEB DEVELOPER" + back}</h2>
                    </div>
                    <nav>
                        <Link path to='/about' className={pathname === aboutPath ? 'linkHovered' : 'link'}><span>ABOUT</span></Link>
                        <Link path to='/education' className={pathname === educationPath ? 'linkHovered' : 'link'}><span>EDUCATION</span></Link>
                        <Link path to='/projects' className={pathname === projectsPath ? 'linkHovered' : 'link'}><span>PROJECTS</span></Link>
                        <Link path to='/experience' className={pathname === experiencePath ? 'linkHovered' : 'link'}><span>EXPERIENCE</span></Link>
                        <Link path to='/contact' className={pathname === contactPath ? 'linkHovered' : 'link'}><span>CONTACT</span></Link>  
                    </nav>   
                </header>
                {/* )} */}
                    <div onClick={()=> this.setState({showNav: !showNav})}className='button-for-mobile'>
                    {!showNav ? (
                        <i class="material-icons">
                        expand_more
                        </i>
                    ):(
                        <i class="material-icons">
                        expand_less
                        </i>
                    )}
                    
                    </div>
                    <div className={showNav ? 'mobile-nav' : 'no-mobile-nav'}>
                        <Link path to='/about' className={pathname === aboutPath ? 'linkHovered' : 'link'} onClick={() => this.setState({showNav: !showNav})}><span>ABOUT</span></Link>
                        <Link path to='/education' className={pathname === educationPath ? 'linkHovered' : 'link'} onClick={() => this.setState({showNav: !showNav})}><span>EDUCATION</span></Link>
                        <Link path to='/projects' className={pathname === projectsPath ? 'linkHovered' : 'link'} onClick={() => this.setState({showNav: !showNav})}><span>PROJECTS</span></Link>
                        <Link path to='/experience' className={pathname === experiencePath ? 'linkHovered' : 'link'} onClick={() => this.setState({showNav: !showNav})}><span>EXPERIENCE</span></Link>
                        <Link path to='/contact' className={pathname === contactPath ? 'linkHovered' : 'link'} onClick={() => this.setState({showNav: !showNav})}><span>CONTACT</span></Link> 
                    </div>

            </div>

        )
    }

    

}

export default withRouter(Header)

