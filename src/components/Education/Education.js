import React from 'react'
import './Education.scss'

function Education () {
    return (
        <div className='education-container'>
            <div className='education'>
                {/* <div className='title'>
                    <h1>console.log(FRANCISCA.education)</h1>
                </div> */}
                <div className='position'>
                    <h1>Web Immersive Course</h1>
                    <h2>DevMountain</h2>
                    
                    <p>03/2019 - 05/2019</p>
                    <button><a target="_blank" href ='https://devmountain.com/web-bootcamp-immersive'>Click here to see program details</a></button>
                    
                </div>
                <div className='position'>
                    <h1>Bachelor of Science, Nutrition</h1>
                    <h2>Arizona State University</h2>
                    <p>08/2010 - 12/2015</p>
                </div>
            </div>
        </div>
    )
}

export default Education;