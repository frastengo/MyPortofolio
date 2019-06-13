import React from 'react'
import './About.scss'
import imageMe from './image2.png'
var front = '<'
var back = '/>'

function About () {
    return (
        <div className='about-container'>
            <div className='about'>
                {/* <div className='title'>
                    <h1>console.log(FRANCISCA.about)</h1>
                </div> */}
                {/* <h1>{front + " " + "Hello & Welcome! " + back }</h1> */}
                <div className='p-image'>
                    
                    <p>Motivated and passionate bilingual professional with a full year of experience in web developing and significant background in customer service experience that is looking for an exciting opportunity to offer strong coding skills and continue to thrive as a<span> Web Developer.</span> 
                        
                    </p>
                </div>
                    <img src={imageMe}/>
                
                    <br/>
                {/* <p>
                    During that journey, I realized that I was very interested and enjoyed the use of technology and computer software which is what trigger the decision to start exploring <span>coding</span>. I started with resources online that then led me to a three month program from Code Academy, Build Websites From Scratch. This amazing experience made me realized that I wanted to become a <span>Web Developer</span> and it is why I decided to attend DevMountain coding boot camp. I absolutely loved it and I truly believed I have found my passion. I am now ready to continue to explore, learn, and <span> expand my skills.</span> */}

                {/* </p> */}
                
            </div>
        </div>
    )
}

export default About;