import React from 'react'
import '../styles/aboutInterest.css'

const AboutInterst = ({ title, description }) => {
    return (
        <div className='content'>
            <h3 className='title'>
                {title}
            </h3>
            <p className='description'>
                {description}
            </p>
        </div>
    )
}

export default AboutInterst